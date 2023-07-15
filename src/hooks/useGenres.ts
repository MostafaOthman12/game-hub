import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  game_count: number;
  image_background: string;
}

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
