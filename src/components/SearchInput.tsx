import { InputGroup, Input, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchQuery: string | "") => void;
}
export const SearchInput = ({ onSearch }: Props) => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        onChange={(e) => {
          onSearch(e.target.value);
        }}
        variant={"outline"}
        borderRadius={25}
        placeholder="Search for game...."
      />
    </InputGroup>
  );
};
