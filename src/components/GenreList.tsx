import { VStack } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

export const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  return (
    <VStack paddingX={"10px"} alignItems={"flex-start"}>
      {data.map((genre) => (
        <p key={genre.id}>{genre.name}</p>
      ))}
    </VStack>
  );
};
