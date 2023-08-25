import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Game from "../entities/Game";
import getCroppedImageUrl from "../Services/image-url";
import { CriticScore } from "./CriticScore";
import { Emoji } from "./Emoji";
import { PlatformIconList } from "./PlatformIconList";
interface Props {
  game: Game;
}
export const GameCard = ({ game }: Props) => {
  return (
    <Link to={`/game/${game.slug}`}>
      {" "}
      <Card
        _hover={{
          transform: "scale(1.05)",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          transition:
            "background-color 0.2s, color 0.2s, transform 0.2s, box-shadow 0.2s",
        }}
        overflow="hidden"
        borderRadius={10}
      >
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          {game.rating_top}
          <HStack justify={"space-between"} marginBottom={3}>
            <PlatformIconList
              platform={game.parent_platforms.map(
                (platform) => platform.platform
              )}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
          <Emoji raiting={game.rating_top} />
        </CardBody>
      </Card>
    </Link>
  );
};
