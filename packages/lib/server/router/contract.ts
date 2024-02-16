import { publicProcedure, router } from "../trpc";
import { TRPCError } from "@trpc/server";
import { ERC721Client } from "@imtbl/contracts";
import { Contract, getDefaultProvider, providers, Wallet } from "ethers";
import { CONTRACT_ADDRESS, TOKEN_ADDRESS } from "../../constants";
import { z } from "zod";
import { GameToken__factory } from "@roccaweb/contracts/typechain-types/factories/contracts/implementations";
import { GameToken } from "@roccaweb/contracts/typechain-types/contracts/implementations/GameToken";
import { parseEther, parseUnits } from "ethers/lib/utils";

export const contractRouter = router({
    mintStarterPack: publicProcedure
        .input(z.object({ userAddress: z.string() }))
        .mutation(async (opts) => {
            const { userAddress } = opts.input;

            if (!userAddress) {
                throw new TRPCError({ code: "BAD_REQUEST", message: "No user address provided" })
            }
            // NOTE: This is not safe. Move to backend route instead
            const rpcProvider = getDefaultProvider("https://rpc.testnet.immutable.com/");
            const signer = new Wallet(
                process.env.PRIVATE_KEY as string,
                rpcProvider
            );

            const contractInstance = () => new ERC721Client(CONTRACT_ADDRESS);

            
            const TOKEN_IDS = [
                {
                    to: userAddress,
                    tokenIds: ["4", "5", "6"],
                },
            ];
            const contract = contractInstance();
            // const lastTokenId = contract.totalSupply(signer);
            // console.log(lastTokenId)
            try {

                const transaction = await contract.populateMintBatch(TOKEN_IDS, {
                    gasLimit: 1000000,
                    maxFeePerGas: parseUnits('100', 'gwei'),
                    maxPriorityFeePerGas: parseUnits('10', 'gwei'),
                });
                console.log(transaction)
                const tx = await signer.sendTransaction(transaction);
                return tx.wait();
            } catch (e) {
                console.log(e)
            }

        }),
    mintToken: publicProcedure
        .input(z.object({ userAddress: z.string(), amount: z.string() }))
        .mutation(async (opts) => {
            const { userAddress, amount } = opts.input;

            if (!userAddress) {
                throw new TRPCError({ code: "BAD_REQUEST", message: "No user address provided" })
            }
            // NOTE: This is not safe. Move to backend route instead
            const rpcProvider = getDefaultProvider("https://rpc.testnet.immutable.com/");
            const signer = new Wallet(
                process.env.PRIVATE_KEY as string,
                rpcProvider
            );

            const contractInstance = () => new Contract(TOKEN_ADDRESS, GameToken__factory.createInterface(), signer) as GameToken;

            const contract = contractInstance();
            try {
                const transaction = await contract.mint(userAddress, parseEther(amount), {
                    gasLimit: 1000000,
                    maxFeePerGas: parseUnits('100', 'gwei'),
                    maxPriorityFeePerGas: parseUnits('10', 'gwei'),
                });
                return transaction.wait();
            } catch (e) {
                console.log(e)
            }
        }),
    getUserTokenBalance: publicProcedure
        .input(z.object({ userAddress: z.string() }))
        .query(async (opts) => {
            const { userAddress } = opts.input;

            if (!userAddress) {
                throw new TRPCError({ code: "BAD_REQUEST", message: "No user address provided" })
            }
            // NOTE: This is not safe. Move to backend route instead
            const rpcProvider = getDefaultProvider("https://rpc.testnet.immutable.com/");
            const signer = new Wallet(
                process.env.PRIVATE_KEY as string,
                rpcProvider
            );

            const contractInstance = () => new Contract(TOKEN_ADDRESS, GameToken__factory.createInterface(), signer) as GameToken;

            const contract = contractInstance();
            try {

                const transaction = await contract.balanceOf(userAddress);
                return transaction;
            } catch (e) {
                console.log(e)
            }
        }),
})