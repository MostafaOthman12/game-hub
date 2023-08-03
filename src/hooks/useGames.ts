import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQurey } from "../App";
import APIClient, { FetchResponse } from "../Services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIClient<Game>("/games");
const useGames = (gameQuery: GameQurey) =>
  useInfiniteQuery<FetchResponse<Game>, Error>(["games", gameQuery], {
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          platforms: gameQuery.platformId,
          ordering: gameQuery.ordering,
          search: gameQuery.search,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allpages) => {
      return lastPage.next ? allpages.length + 1 : undefined;
    },
  });

export default useGames;
