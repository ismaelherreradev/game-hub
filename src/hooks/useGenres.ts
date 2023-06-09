import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import APICLient from "../services/api-client";

const apiCLient = new APICLient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiCLient.getAll,
    staleTime: ms("24h"),
    initialData: { count: genres.length, results: genres, next: null },
  });

export default useGenres;
