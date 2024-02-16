import { Button, Flex, Heading, Input, Text, createStandaloneToast } from "@chakra-ui/react";
import { trpc } from "@roccaweb/lib/server/utils/trpc";
import { useState } from "react";
import { formatEther } from "ethers/lib/utils";

const { ToastContainer, toast } = createStandaloneToast();

export const Mint = ({ userAddress }: { userAddress: string }) => {
	const [amount, setAmount] = useState<string>("0");
	const { mutate: mintTokens, isLoading } = trpc.contract.mintToken.useMutation(
		{
			onError: () => {
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
		}
	);
	const { data: balance } = trpc.contract.getUserTokenBalance.useQuery({
		userAddress,
	});

	return (
		<Flex flexDir="column" align="center">
			<Heading>Mint ERC20 Tokens:</Heading>
            <ToastContainer />
			<Input
				value={amount}
				type="number"
				onChange={(e) => setAmount(e.target.value)}
			/>
			<Button
				isLoading={isLoading}
				onClick={() => {
					if (parseFloat(amount) <= 0) {
						return;
					}
					mintTokens({ userAddress, amount: amount });
				}}
			>
				Mint
			</Button>
			<Text>Current balance: {formatEther(balance ?? 0)}</Text>
		</Flex>
	);
};
