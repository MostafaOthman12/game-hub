import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQurey } from "../GameStore";
import APIClient, { FetchResponse } from "../Services/api-client";
import Game from "../entities/Game";

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
