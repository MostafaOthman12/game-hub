import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import { GameGrid } from "./components/GameGrid";
import { GenreList } from "./components/GenreList";
import { NavBar } from "./components/NavBar";
import { PlatformSelector } from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatform";
import { Genre } from "./hooks/useGenres";
import { SortSelector } from "./components/SortSelector";
import { GameHeading } from "./components/GameHeading";

export interface GameQurey {
  genre: Genre | null;
  platform: Platform | null;
  ordering: string | "";
  search: string | "";
}

function App() {
  const [gameQurey, setGameQuery] = useState<GameQurey>({} as GameQurey);

  const onSelectGenre = (genre: Genre) => {
    setGameQuery({ ...gameQurey, genre });
  };
  const onSelectPlatform = (platform: Platform) => {
    setGameQuery({ ...gameQurey, platform });
  };
  const onSelectSortBy = (ordering: string) => {
    setGameQuery({ ...gameQurey, ordering });
  };
  const onSearch = (searchQuery: string | "") => {
    setGameQuery({ ...gameQurey, search: searchQuery });
  };
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar onSearch={(searchQuery) => onSearch(searchQuery)} />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={"10px"} alignItems={"flex-start"}>
          <GenreList
            selectedGenre={gameQurey.genre}
            onSelect={(genre) => onSelectGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingX={6}>
          <GameHeading gameQuery={gameQurey} />
          <HStack>
            <PlatformSelector
              selectedPlatform={gameQurey.platform}
              onSelect={(platform) => onSelectPlatform(platform)}
            />
            <SortSelector
              sorOrder={gameQurey.ordering}
              onSelect={(ordering) => onSelectSortBy(ordering)}
            />
          </HStack>
        </Box>

        <GameGrid gameQuery={gameQurey} />
      </GridItem>
    </Grid>
  );
}

export default App;
