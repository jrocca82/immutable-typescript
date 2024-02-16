import { Flex, Text, Heading, Image, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import { blockchainData } from "@imtbl/sdk";
import { useEffect, useState } from "react";
import { immutableClient } from "@roccaweb/lib/services/Immutable";
import Link from "next/link";
import { CoinsModal } from "@/components/CoinsModal";
import { TOKEN_ADDRESS } from "@roccaweb/lib/constants";

const CONTRACT_ADDRESS = "0xb1716bcd9c2c2823ad81e7f4c51c0210db7e81c1";

const HomePage: NextPage = () => {
	const userAddress = "0x704fb81faad8ade305357549a7d1e41aeb852ccb";
	const [assets, setAssets] = useState<blockchainData.Types.ListNFTsResult>();

	useEffect(() => {
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
	}, [userAddress]);

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
			<CoinsModal />

			{assets && assets.result.length > 0 && (
				<Flex flexDir="column" align="center">
					<Heading my="20px">NFTs</Heading>
					<Text>NFTs for {userAddress}</Text>
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
			)}
		</Flex>
	);
};

export default HomePage;
