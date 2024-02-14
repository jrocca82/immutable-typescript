import { ArrowBackIcon } from "@chakra-ui/icons";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	Button,
	useDisclosure,
	VStack,
	Flex
} from "@chakra-ui/react";
import { useState } from "react";

import { BridgeWidget } from "./BridgeWidget";
import { SwapWidget } from "./SwapWidget";
import { RampWidget } from "./RampWidget";

enum CoinBuyOptions {
	Bridge = "bridge",
	Swap = "swap",
	Buy = "buy",
}

export const CoinsModal = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [buyOption, setBuyOption] = useState<CoinBuyOptions | undefined>(
		undefined
	);

	return (
		<>
			<Button onClick={onOpen}>Get Immutable Tokens</Button>

			<Modal isOpen={isOpen} onClose={onClose} size="2xl">
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						{buyOption ? buyOption.toUpperCase() : "Get Immutable Coins"}
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						{!buyOption && (
							<VStack>
								<Button
									onClick={() => {
										setBuyOption(CoinBuyOptions.Bridge);
									}}
								>
									Bridge
								</Button>
								<Button onClick={() => setBuyOption(CoinBuyOptions.Swap)}>
									Swap
								</Button>
								<Button onClick={() => setBuyOption(CoinBuyOptions.Buy)}>
									Buy
								</Button>
							</VStack>
						)}
						{buyOption && (
							<Flex align="center" justify="space-between">
								<ArrowBackIcon
									cursor="pointer"
									onClick={() => setBuyOption(undefined)}
									margin="10px"
									boxSize="30px"
								/>
								{buyOption === CoinBuyOptions.Bridge && (
									<Flex w="500px">
										<BridgeWidget />
									</Flex>
								)}
								{buyOption === CoinBuyOptions.Swap && (
									<Flex w="500px">
										<SwapWidget />
									</Flex>
								)}
								{buyOption === CoinBuyOptions.Buy && (
									<Flex w="500px">
										<RampWidget />
									</Flex>
								)}
							</Flex>
						)}
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};
