import { Heading, Flex } from "@chakra-ui/react";

export const PageHeading = ({ heading }: { heading: string }) => (
  <Flex my="20px" w="100%" alignItems="center" justifyContent="center">
    <Heading size="lg">{heading}</Heading>
  </Flex>
);
