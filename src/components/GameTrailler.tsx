import { Box, Spinner } from "@chakra-ui/react";
import useTrailler from "../hooks/useTrailler";

interface Props {
  gameId: number;
}

export const GameTrailler = ({ gameId }: Props) => {
  const { data: trallier, isLoading, error } = useTrailler(gameId);
  if (isLoading) return <Spinner />;
  if (error) throw error;
  return trallier?.results[0] ? (
    <video poster={trallier.results[0].preview} controls>
      <source src={trallier.results[0].data.max} />
      <source src={trallier.results[0].data[480]} />
    </video>
  ) : null;
};
