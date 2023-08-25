import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { ExpandableText } from "../components/ExpandableText";
import { GameAttributes } from "../components/GameAttributes";
import { GameScreenshots } from "../components/GameScreenshots";
import { GameTrailler } from "../components/GameTrailler";
import useGame from "../hooks/useGame";

export const GameDetails = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ md: 2, sm: 1 }} padding={5} as="dd">
      <GridItem>
        <Heading> {game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailler gameId={game.id}></GameTrailler>
        <GameScreenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};
