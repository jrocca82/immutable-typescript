import { ArrowBackIcon } from "@chakra-ui/icons";
import { Flex, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NavMenu from "./NavMenu";

const NavBar = () => {
  const router = useRouter();
  return (
    <Flex
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      padding="30px"
    >
      <ArrowBackIcon
        onClick={() => router.back()}
        cursor="pointer"
        boxSize="30px"
      />
      <Image
        w="200px"
        onClick={() => router.push("/")}
        src="/logo.png"
        cursor="pointer"
      />
      <NavMenu />
    </Flex>
  );
};

export default NavBar;
