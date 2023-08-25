import { useQuery } from "@tanstack/react-query";
import Screenshot from "../entities/screenshots";
import APIClient, { FetchResponse } from "../Services/api-client";

const useScreenshot = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};
export default useScreenshot;
