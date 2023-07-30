import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../Services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatform = () =>
  useQuery(["platforms"], {
    queryFn: () => apiClient.getAll(),
  });
export default usePlatform;
