import { VStack } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

export const GenreList = () => {
  const { genres, isLoading, error } = useGenres();
  console.log(genres);
  return (
    <VStack paddingX={"10px"} alignItems={"flex-start"}>
      {genres.map((genre) => (
        <p key={genre.id}>{genre.name}</p>
      ))}
    </VStack>
  );
};
