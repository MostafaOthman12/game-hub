import { useQuery } from "@tanstack/react-query";
import Game from "../entities/Game";
import APIClient from "../Services/api-client";

const useGame = (slug: string) => {
  const apiClient = new APIClient<Game>(`/games/${slug}`);
  return useQuery<Game>(["game"], {
    queryFn: () => apiClient.get(slug),
  });
};

export default useGame;
