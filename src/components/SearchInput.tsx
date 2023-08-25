import { InputGroup, Input, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useGameQueryStore from "../GameStore";

export const SearchInput = () => {
  const setSearch = useGameQueryStore((s) => s.onSearch);
  const navigate = useNavigate();

  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        onChange={(e) => {
          setSearch(e.target.value);
          navigate("/");
        }}
        variant={"outline"}
        borderRadius={25}
        placeholder="Search for game...."
      />
    </InputGroup>
  );
};
