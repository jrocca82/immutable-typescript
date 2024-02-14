import { Flex, FlexProps } from "@chakra-ui/react";
import { ReactNode } from "react";

const PageWrapper = ({
  children,
  ...rest
}: { children: ReactNode } & FlexProps) => (
  <Flex
    width="100%"
    padding="10px"
    minH="85vh"
    flexDir="column"
    justifyContent="center"
    alignItems="center"
    {...rest}
  >
    {children}
  </Flex>
);

export default PageWrapper;
