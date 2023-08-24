import { useQuery } from "@tanstack/react-query";
import APIClient from "../Services/api-client";
import { Game } from "../entities/Game";

const useGame = (slug: string) => {
  const apiClient = new APIClient<Game>(`/games/${slug}`);
  return useQuery<Game>(["game"], {
    queryFn: () => apiClient.get(slug),
  });
};

export default useGame;
