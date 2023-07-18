import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { SearchInput } from "./SearchInput";

interface Props {
  onSearch: (searchQuery: string | "") => void;
}
export const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding={"10px"} justifyContent={"space-between"}>
      <Image src={logo} boxSize={"60px"} />
      <SearchInput onSearch={(searchQuery) => onSearch(searchQuery)} />
      <ColorModeSwitch />
    </HStack>
  );
};
