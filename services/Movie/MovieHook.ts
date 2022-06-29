import { useQuery } from "react-query";
import { Get } from "../Shared/GeneralService"
import { MovieList } from "@models";

const useMovieList = (movieId: number, page: number = 1) => {

    const result = useQuery("MovieList", async () => {
        return await Get<MovieList>(`movie/${movieId}/lists?language=en-US&page=${page}`);
    });

    return result;
};


export { useMovieList };