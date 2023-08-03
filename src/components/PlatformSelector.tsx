import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
interface Props {
  onSelect: (platformId: number) => void;
  selectedPlatform: number;
}
export const PlatformSelector = ({ onSelect, selectedPlatform }: Props) => {
  const { data } = usePlatforms();
  const platformName = data?.results.find(
    (p) => p.id === selectedPlatform
  )?.name;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platformName || "Platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem onClick={() => onSelect(platform.id)} key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
