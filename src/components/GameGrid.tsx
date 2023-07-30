import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import { GameQurey } from "../App";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";
import React, { useState } from "react";

interface Props {
  gameQuery: GameQurey;
}

export const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useGames(gameQuery);
  const skeltons = [1, 2, 3, 4, 5, 6];
  if (isLoading)
    return (
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={4}
        padding={7}
      >
        {skeltons.map((game) => (
          <GameCardSkeleton key={game} />
        ))}
      </SimpleGrid>
    );
  return (
    <Box padding={7}>
      {error ? <Text>{error?.message}</Text> : ""}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={4}>
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page?.results.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button
          marginY={5}
          onClick={() => fetchNextPage()}
          colorScheme={"gray"}
        >
          {isFetchingNextPage ? "Loading..." : "load more"}
        </Button>
      )}
    </Box>
  );
};
