import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { SearchInput } from "./SearchInput";

export const NavBar = () => {
  return (
    <HStack padding={"10px"} justifyContent={"space-between"}>
      <Link to={"/"}>
        {" "}
        <Image objectFit={"cover"} src={logo} boxSize={"60px"} />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};
