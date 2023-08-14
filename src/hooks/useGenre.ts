import useGenres from "./useGenres";

const useGenre = (id?: number) => {
  return useGenres().data?.results.find((g) => g.id === id);
};

export default useGenre;
