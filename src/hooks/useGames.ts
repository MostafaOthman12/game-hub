import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { all, AxiosError } from "axios";
import { GameQurey } from "../App";
import APIClient, { FetchResponse } from "../Services/api-client";
import { Platform } from "./usePlatform";

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
          genres: gameQuery.genre?.id,
          platforms: gameQuery.platform?.id,
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
