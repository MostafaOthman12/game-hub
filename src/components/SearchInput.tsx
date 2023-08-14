import { InputGroup, Input, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../GameStore";

export const SearchInput = () => {
  const setSearch = useGameQueryStore((s) => s.onSearch);

  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        variant={"outline"}
        borderRadius={25}
        placeholder="Search for game...."
      />
    </InputGroup>
  );
};
