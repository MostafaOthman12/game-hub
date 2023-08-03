import { Heading } from "@chakra-ui/react";
import { GameQurey } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
interface Props {
  gameQuery: GameQurey;
}
export const GameHeading = ({ gameQuery }: Props) => {
  return (
    <Heading marginY={5}>
      {useGenre(gameQuery.genreId)?.name || ""}{" "}
      {usePlatform(gameQuery.platformId)?.name || ""} Games
    </Heading>
  );
};
