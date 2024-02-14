import "@total-typescript/ts-reset";
import "@splidejs/react-splide/css/core";
import { ChakraProvider } from "@chakra-ui/react";
import { trpc } from "@roccaweb/lib/server/utils/trpc";
import { theme } from "@roccaweb/ui";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/react";
import { AppProps } from "next/app";
import { useState } from "react";
import { useRouter } from "next/router";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { useProviderConfig } from "../constants/thirdweb";

const App = ({ Component, pageProps }: AppProps) => {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<ThirdwebProvider {...useProviderConfig()}>
			<QueryClientProvider client={queryClient}>
				<ChakraProvider theme={theme}>
					<Analytics />
					{/* @ts-ignore */}
					<Component {...pageProps} />
				</ChakraProvider>
			</QueryClientProvider>
		</ThirdwebProvider>
	);
};

export default trpc.withTRPC(App);
