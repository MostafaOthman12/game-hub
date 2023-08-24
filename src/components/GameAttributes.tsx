import { List, SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import { CriticScore } from "./CriticScore";
import { Defenation } from "./Defination";

interface Props {
  game: Game;
}

export const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <Defenation term="Platforms">
        {game.parent_platforms.map((p, index) => (
          <Text key={index}>{p.platform.name}</Text>
        ))}
      </Defenation>
      <Defenation term="Metascore">
        <CriticScore score={game.metacritic} />
      </Defenation>

      <Defenation term="Genres">
        {game.genres.map((g, index) => (
          <Text key={index}>{g.name}</Text>
        ))}
      </Defenation>
      <Defenation term="Publishers">
        {game.publishers.map((p, index) => (
          <Text key={index}>{p.name}</Text>
        ))}
      </Defenation>
    </SimpleGrid>
  );
};
