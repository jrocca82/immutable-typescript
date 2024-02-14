import { ethers, providers } from "ethers";
import { passportInstance } from "./Immutable";
import { passport } from "@imtbl/sdk";

/**
 * Ethers provider for Next.js backend calls
 */
export class ImmutableProvider {
    private static rpcProvider: providers.Web3Provider;

    /**
     * Initialise a new JSON RPC provider based on the current environment
     */
    private static initProvider() {
        const passport = passportInstance.connectEvm();
        const provider = new ethers.providers.Web3Provider(passport);

        this.rpcProvider = provider;
    }

    public static getRPCProvider() {
        if (!this.rpcProvider) {
            this.initProvider();
        }
        return this.rpcProvider;
    }
}