import {
	coinbaseWallet,
	magicLink,
	metamaskWallet,
	rainbowWallet,
	safeWallet,
	ThirdwebAuthConfig,
	walletConnect,
} from "@thirdweb-dev/react";
import { DAppMetaData } from "@thirdweb-dev/wallets";

export const useProviderConfig = () => {
	const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID;
	const activeChain = undefined; // Specify a chain here if you want to force the user onto a specific chain

	const authConfig: ThirdwebAuthConfig = {
		domain: "http://localhost:3000",
		authUrl: "/api/auth",
	};

	const dAppMetadata: DAppMetaData = {
		name: "Repo Template App",
		description: "This is our app",
		url: "http://localhost:3000",
	};

	const supportedWallets = [
		metamaskWallet({ projectId }),
		walletConnect({ projectId }),
		coinbaseWallet(),
		rainbowWallet({ projectId }),
		safeWallet(),
	];

	return {
		projectId,
		activeChain,
		authConfig,
		dAppMetadata,
		supportedWallets,
		clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID as string,
	};
};
