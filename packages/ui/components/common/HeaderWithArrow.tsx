import { ArrowForwardIcon } from "@chakra-ui/icons";
import { HStack, Heading } from "@chakra-ui/react";

export const HeaderWithArrow = ({
  heading,
  onClick,
}: {
  heading: string;
  onClick: () => void;
}) => (
  <HStack
    onClick={onClick}
    width="100%"
    alignItems="center"
    justifyContent="center"
    cursor="pointer"
  >
    <Heading size="md">{heading}</Heading>
    <ArrowForwardIcon />
  </HStack>
);
