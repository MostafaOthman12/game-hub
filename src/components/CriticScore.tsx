import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}
export const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      paddingX={2}
      borderRadius={5}
      fontSize={"  14px"}
      colorScheme={color}
    >
      {score}
    </Badge>
  );
};
