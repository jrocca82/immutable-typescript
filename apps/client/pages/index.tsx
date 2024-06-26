import { Flex, Text, Button, Heading, Image, VStack } from "@chakra-ui/react";
import { createStandaloneToast } from "@chakra-ui/react";
import { NextPage } from "next";
import { blockchainData } from "@imtbl/sdk";
import { useAddress } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import { ImmutableProvider } from "@roccaweb/lib/services/ImmutableProvider";
import { immutableClient } from "@roccaweb/lib/services/Immutable";
import { ConnectWallet } from "@thirdweb-dev/react";
import Link from "next/link";
import { trpc } from "@roccaweb/lib/server/utils/trpc";
import { CoinsModal } from "@/components/CoinsModal";
import { Mint } from "@/components/Mint";
import { TOKEN_ADDRESS } from "@roccaweb/lib/constants";
import { useRouter } from "next/router";

const CONTRACT_ADDRESS = "0xb1716bcd9c2c2823ad81e7f4c51c0210db7e81c1";
const { ToastContainer, toast } = createStandaloneToast();

const HomePage: NextPage = () => {
	const [userAddress, setUserAddress] = useState<string>();
	const [assets, setAssets] = useState<blockchainData.Types.ListNFTsResult>();
	const router = useRouter();

	const externalWallet = useAddress();

	const login = async () => {
		const provider = ImmutableProvider.getRPCProvider();

		try {
			const accounts = await provider.send("eth_requestAccounts", []);
			if (accounts) {
				setUserAddress(accounts[0]);
			}
		} catch (e) {
			console.log(e);
		}
	};

	const { mutate: batchMint, isLoading } =
		trpc.contract.mintStarterPack.useMutation({
			onError: (e) => {
				console.log(e);
				toast({
					title: "ERROR",
					description: "Error minting",
					status: "error",
				});
			},
			onSuccess: () => {
				toast({
					title: "SUCCESS",
					description: "NFTs minted",
					status: "success",
				});
			},
		});

	useEffect(() => {
		if (!userAddress) {
			if (externalWallet) {
				setUserAddress(externalWallet);
			}
			return;
		}
		const getAssets = async () => {
			const chainName = "imtbl-zkevm-testnet";
			const response = await immutableClient.listNFTsByAccountAddress({
				chainName,
				accountAddress: userAddress,
				contractAddress: CONTRACT_ADDRESS,
			});
			if (response) {
				setAssets(response);
			}
		};

		getAssets();
	}, [userAddress, externalWallet]); // Replace empty array with dependency list if needed

	return (
		<Flex
			p="20px"
			justifyContent="center"
			alignItems="center"
			h="100vh"
			w="100%"
			flexDirection="column"
		>
			<Heading>Cats and Soup: Immutable NFTs</Heading>
			<Link
				href={`https://explorer.testnet.immutable.com/address/${CONTRACT_ADDRESS}`}
				target="_blank"
			>
				<Text>View NFT on block explorer</Text>
			</Link>
			<Link
				href={`https://explorer.testnet.immutable.com/address/${TOKEN_ADDRESS}`}
				target="_blank"
			>
				<Text>View ERC20 on block explorer</Text>
			</Link>
			{userAddress ? (
				<Flex flexDir="column" justify="center" align="center">
					<ToastContainer />
					<Text color="white">Connected Wallet: {userAddress}</Text>
					<Mint userAddress={userAddress} />
					{assets && assets.result.length > 0 ? (
						<Flex flexDir="column" align="center">
							<Heading my="20px">My NFTs</Heading>
							<CoinsModal />
							<Flex gap={6}>
								{assets.result.map((asset) => (
									<Flex
										align="center"
										justify="center"
										bgColor="blue.500"
										padding="10px"
										borderRadius="20px"
									>
										<Image
											boxSize={200}
											src={asset.image || ""}
											alt={asset.name || "NFT"}
											borderRadius="lg"
										/>
										<VStack mx="10px">
											<Text fontWeight="bold">Collection: {asset.name}</Text>
											<Text>Token ID: {asset.token_id}</Text>
											<Text>Attributes:</Text>
											{asset.attributes?.map((attr) => (
												<Text>
													{attr.trait_type}: {attr.value}
												</Text>
											))}
										</VStack>
									</Flex>
								))}
							</Flex>
						</Flex>
					) : (
						<Button
							isLoading={isLoading}
							isDisabled={isLoading}
							onClick={() => {
								try {
									batchMint({ userAddress });
								} catch (e) {
									console.log(e);
								}
							}}
						>
							Mint starter pack
						</Button>
					)}
				</Flex>
			) : (
				<VStack>
					<Button onClick={() => login()}>Log in with Immutable</Button>
					<Text>or</Text>
					<ConnectWallet />
				</VStack>
			)}
			<Button onClick={() => router.push("/view")}>View All Minted NFTs</Button>
		</Flex>
	);
};

export default HomePage;
