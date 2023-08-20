import { Heading, HStack, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";

export const GameDetails = () => {
  const { slug } = useParams();
  const { data, error } = useGame(slug!);
  if (error || !data) throw error;
  else {
    return (
      <>
        <Heading> {data.name}</Heading>
        <Text> {data.description_raw}</Text>
      </>
    );
  }
};
