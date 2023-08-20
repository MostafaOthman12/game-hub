import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../Services/api-client";
import { Game } from "./useGames";

const useGame = (slug: string) => {
  const apiClient = new APIClient<Game>(`/games/${slug}`);
  return useQuery<Game>(["game"], {
    queryFn: () => apiClient.get(slug),
  });
};

export default useGame;
