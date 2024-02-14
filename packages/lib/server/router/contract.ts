import { publicProcedure, router } from "../trpc";
import { TRPCError } from "@trpc/server";
import { ERC721Client } from "@imtbl/contracts";
import { getDefaultProvider, Wallet } from "ethers";
import { CONTRACT_ADDRESS } from "../../constants";
import { z } from "zod";

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
                    tokenIds: ["1", "2", "3"],
                },
            ];
            const contract = contractInstance();
            const transaction = await contract.populateMintBatch(TOKEN_IDS);
            const tx = await signer.sendTransaction(transaction);
            return tx.wait();

        })
});