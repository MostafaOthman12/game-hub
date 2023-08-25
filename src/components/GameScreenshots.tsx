import { SimpleGrid, Spinner } from "@chakra-ui/react";
import useScreenshot from "../hooks/useScreenshot";
interface Props {
  gameId: number;
}
export const GameScreenshots = ({ gameId }: Props) => {
  const { data: screenshots, isLoading, error } = useScreenshot(gameId);
  if (isLoading) <Spinner />;
  if (error) throw error;

  return screenshots ? (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="6">
      {screenshots.results.map((s) => (
        <img key={s.id} src={s.image} />
      ))}
    </SimpleGrid>
  ) : null;
};
