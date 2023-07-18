import { Heading } from "@chakra-ui/react";
import { GameQurey } from "../App";
interface Props {
  gameQuery: GameQurey;
}
export const GameHeading = ({ gameQuery }: Props) => {
  return (
    <Heading marginY={5}>
      {gameQuery.genre?.name || ""} {gameQuery.platform?.name || ""} Games
    </Heading>
  );
};
