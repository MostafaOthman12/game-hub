import { Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useGames from "../hooks/useGames";
import apiClient from "../Services/api-client";

export const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <div>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};
