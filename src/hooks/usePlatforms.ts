import { useQuery } from "@tanstack/react-query";
import APIClient from "../Services/api-client";
import { Platform } from "../entities/Platform";

export const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery(["platforms"], {
    queryFn: () => apiClient.getAll(),
  });
export default usePlatforms;
