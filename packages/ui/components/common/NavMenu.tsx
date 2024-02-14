import { HamburgerIcon } from "@chakra-ui/icons";
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Button,
	IconButton,
	chakra,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const NavMenu = () => {
	const router = useRouter();

	return (
		<>
			<Menu>
				<MenuButton
					as={IconButton}
					aria-label="Options"
					icon={<HamburgerIcon boxSize="30px" />}
					variant="icon"
				/>
				<MenuList bgColor="white.500">
					<MenuItem
						bgColor="white.500"
						color="black"
						onClick={() => router.push("/about")}
					>
						About
					</MenuItem>
					<MenuItem
						bgColor="white.500"
						color="black"
						onClick={() => router.push("/projects")}
					>
						Projects
					</MenuItem>
					<MenuItem
						bgColor="white.500"
						onClick={() => router.push("/developer")}
						color="black"
					>
						Developers
					</MenuItem>
					<MenuItem
						bgColor="white.500"
						onClick={() => router.push("/contact")}
						color="black"
					>
						Contact
					</MenuItem>
				</MenuList>
			</Menu>
		</>
	);
};

export default NavMenu;
