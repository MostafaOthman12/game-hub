import { useQuery } from "@tanstack/react-query";
import GameTrailler from "../entities/GameTrailler";
import APIClient from "../Services/api-client";

const useTrailler = (gameId: number) => {
  const apiClient = new APIClient<GameTrailler>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["traillers", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useTrailler;
