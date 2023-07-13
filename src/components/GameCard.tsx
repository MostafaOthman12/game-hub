import { Card, CardBody, CardHeader, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Game } from "../hooks/useGames";
interface Props {
  game: Game;
}
export const GameCard = ({ game }: Props) => {
  return (
    <Card overflow="hidden" borderRadius={10}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};
