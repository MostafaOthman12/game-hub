import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../GameStore";

export const SortSelector = () => {
  const order = useGameQueryStore((s) => s.gameQuery.ordering);
  const setSortOrder = useGameQueryStore((s) => s.onSelectSortBy);
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "released", label: "Release date" },
    { value: "metacritic", label: "Popularity" },
    { value: "rating", label: "Average rating" },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Ordered By:{" "}
        {sortOrder.find((x) => x.value == order)?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrder.map((order) => (
          <MenuItem
            onClick={() => {
              setSortOrder(order.value);
            }}
            key={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
