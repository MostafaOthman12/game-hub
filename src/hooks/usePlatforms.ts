import { useQuery } from "@tanstack/react-query";
import APIClient from "../Services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery(["platforms"], {
    queryFn: () => apiClient.getAll(),
  });
export default usePlatforms;
