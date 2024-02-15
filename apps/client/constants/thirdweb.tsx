import { getBaseUrl } from "@roccaweb/lib";
import {
	coinbaseWallet,
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
	const url = getBaseUrl();

	const authConfig: ThirdwebAuthConfig = {
		domain: url,
		authUrl: "/api/auth",
	};

	const dAppMetadata: DAppMetaData = {
		name: "Repo Template App",
		description: "This is our app",
		url
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
