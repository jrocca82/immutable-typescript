// pages/redirect.js
import { useEffect } from "react";
import { useRouter } from "next/router";
import { passportInstance } from "@roccaweb/lib/services/Immutable";
import { Flex, Text } from "@chakra-ui/react";

const RedirectPage = () => {
	const router = useRouter();

	useEffect(() => {
		const handleLoginCallback = async () => {
			try {
				await passportInstance.loginCallback();
				// Redirect user to home page or wherever you wish
				router.push("/");
			} catch (error) {
				// Handle error
				console.error(error);
			}
		};

		handleLoginCallback();
	}, []);

	return (
		<Flex>
			<Text>Redirect page</Text>
		</Flex>
	);
};

export default RedirectPage;
