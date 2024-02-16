import { Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import { trpc } from "@roccaweb/lib/server/utils/trpc"
import { useState } from "react";
import {formatEther} from "ethers/lib/utils";

export const Mint = ({ userAddress }: { userAddress: string }) => {
    const [amount, setAmount] = useState<string>("0");
    const { mutate: mintTokens, isLoading } = trpc.contract.mintToken.useMutation({
    });
    const {data: balance} = trpc.contract.getUserTokenBalance.useQuery({userAddress});

    return (
        <Flex flexDir="column" align="center">
            <Heading>Mint ERC20 Tokens:</Heading>
            <Input value={amount} type="number" onChange={(e) => setAmount(e.target.value)} />
            <Button isLoading={isLoading} onClick={() => { if (parseFloat(amount) <= 0) { return }; mintTokens({ userAddress, amount: amount }) }}>Mint</Button>
            <Text>Current balance: {formatEther(balance ?? 0)}</Text>
        </Flex>
    )
}