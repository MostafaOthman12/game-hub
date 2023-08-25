import { useQuery } from "@tanstack/react-query";
import APIClient from "../Services/api-client";
import Genre from "../entities/Genre";

export const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery(["genres"], {
    queryFn: () => apiClient.getAll(),
  });

export default useGenres;
