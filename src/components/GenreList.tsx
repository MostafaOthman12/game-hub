import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../Services/image-url";

interface Props {
  onSelect: (genreId: number) => void;
  selectedGenre: number | null;
}

export const GenreList = ({ onSelect, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                objectFit={"cover"}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => onSelect(genre.id)}
                variant="link"
                fontSize="lg"
                fontWeight={selectedGenre == genre.id ? "Bold" : ""}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};
