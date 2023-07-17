import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import { GameGrid } from "./components/GameGrid";
import { GenreList } from "./components/GenreList";
import { NavBar } from "./components/NavBar";
import { PlatformSelector } from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatform";
import { Genre } from "./hooks/useGenres";

export interface GameQurey {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQurey, setGameQuery] = useState<GameQurey>({} as GameQurey);

  const onSelectGenre = (genre: Genre) => {
    setGameQuery({ ...gameQurey, genre });
  };
  const onSelectPlatform = (platform: Platform) => {
    setGameQuery({ ...gameQurey, platform });
  };
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
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
        <PlatformSelector
          selectedPlatform={gameQurey.platform}
          onSelect={(platform) => onSelectPlatform(platform)}
        />
        <GameGrid gameQuery={gameQurey} />
      </GridItem>
    </Grid>
  );
}

export default App;
