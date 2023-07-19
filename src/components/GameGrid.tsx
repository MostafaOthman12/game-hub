import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameQurey } from "../App";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQurey;
}

export const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeltons = [1, 2, 3, 4, 5, 6];
  if (isLoading)
    return (
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={2}
        padding={7}
      >
        {skeltons.map((game) => (
          <GameCardSkeleton key={game} />
        ))}
      </SimpleGrid>
    );
  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={4}
        padding={7}
      >
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
};
