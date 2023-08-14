import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "../GameStore";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

export const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  return (
    <Heading marginY={5}>
      {genre?.name || ""} {platform?.name || ""} Games
    </Heading>
  );
};
