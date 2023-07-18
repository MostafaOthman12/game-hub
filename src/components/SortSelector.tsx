import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelect: (ordering: string) => void;
  sorOrder: string;
}

export const SortSelector = ({ onSelect, sorOrder }: Props) => {
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
        {sortOrder.find((x) => x.value == sorOrder)?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrder.map((order) => (
          <MenuItem
            onClick={() => {
              onSelect(order.value);
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
