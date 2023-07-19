import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../Services/image-url";
import { CriticScore } from "./CriticScore";
import { PlatformIconList } from "./PlatformIconList";
interface Props {
  game: Game;
}
export const GameCard = ({ game }: Props) => {
  return (
    <Card overflow="hidden" borderRadius={10}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justify={"space-between"} marginBottom={3}>
          <PlatformIconList
            platform={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};
