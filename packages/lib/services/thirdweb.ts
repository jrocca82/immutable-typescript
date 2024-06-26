import { PrivateKeyWallet } from "@thirdweb-dev/auth/evm";
import { ThirdwebAuth } from "@thirdweb-dev/auth/next";
import { getBaseUrl } from "../utils";


export const thirdWebService = () => {
    const domain = getBaseUrl();

    return ThirdwebAuth({
        domain,
        wallet: new PrivateKeyWallet(process.env.THIRDWEB_AUTH_PRIVATE_KEY || ""),
        authOptions: {
            statement: "I agree to the terms of service",
            uri: domain,
            resources: [`${domain}/terms-of-service`],
            version: "1",
            tokenDurationInSeconds: 60 * 60 * 24 * 7, // 1 week
            refreshIntervalInSeconds: 60 * 60, // 1 hour
        },
    });
};