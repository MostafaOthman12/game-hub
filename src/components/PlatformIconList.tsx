import { Platform } from "../hooks/usePlatform";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaAndroid,
  FaApple,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { IconType } from "react-icons/lib";
interface Props {
  platform: Platform[];
}

export const PlatformIconList = ({ platform }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
  };
  return (
    <HStack marginY={"10px"}>
      {platform.map((platform) => (
        <Icon
          color={"gray.500"}
          key={platform.id}
          as={iconMap[platform.slug]}
        />
      ))}
    </HStack>
  );
};
