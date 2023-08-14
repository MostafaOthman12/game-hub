import { create } from "zustand";

export interface GameQurey {
  genreId?: number;
  platformId?: number;
  ordering?: string | "Relevent";
  search?: string | "";
  pageParam?: number;
}

interface gameQueryStore {
  gameQuery: GameQurey;
  onSelectGenre: (genreId: number) => void;
  onSelectPlatform: (platformId: number) => void;
  onSelectSortBy: (ordering: string) => void;
  onSearch: (searchQuery: string | "") => void;
}

const useGameQueryStore = create<gameQueryStore>((set) => ({
  gameQuery: {},
  onSelectGenre: (genreId: number) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  onSelectPlatform: (platformId: number) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  onSelectSortBy: (ordering: string) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, ordering: ordering } })),
  onSearch: (searchQuery: string) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, search: searchQuery },
    })),
}));

export default useGameQueryStore;
