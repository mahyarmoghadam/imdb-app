import { MovieInfo } from "./MovieTopRated";

export interface MoviePopular {
    page: number;
    results: MovieInfo[];
    total_results: number;
    total_pages: number;
}
