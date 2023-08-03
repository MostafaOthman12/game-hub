import { useQuery } from "@tanstack/react-query";
import APIClient from "../Services/api-client";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  game_count: number;
  image_background: string;
}
export const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery(["genres"], {
    queryFn: () => apiClient.getAll(),
  });

export default useGenres;
