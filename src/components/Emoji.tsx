import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";

interface Props {
  raiting: number;
}

export const Emoji = ({ raiting }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "Meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "Thumbs Up", boxSize: "25px" },
    5: { src: bullsEye, alt: "Bulls Eye", boxSize: "35px" },
  };
  return <Image {...emojiMap[raiting]} marginTop={1} />;
};
