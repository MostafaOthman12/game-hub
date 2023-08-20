import axios, { AxiosRequestConfig } from "axios";
import { Game } from "../hooks/useGames";

export interface FetchResponse<T> {
  count: number;
  next: string;
  results: T[];
}

const axiosInstant = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "d6910c185e2240d6af55222c3b4c9346" },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (params?: AxiosRequestConfig) => {
    return axiosInstant
      .get<FetchResponse<T>>(this.endpoint, params)
      .then((res) => res.data);
  };
  get = (id: number | string) =>
    axiosInstant<Game>(this.endpoint).then((res) => res.data);
}

export default APIClient;
