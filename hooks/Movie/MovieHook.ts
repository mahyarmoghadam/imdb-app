import { QueryKeys } from '@constants';
import { useQuery } from "react-query";
import { Get } from "@generalService"
import { MovieList } from "@models";

const useMovieList = (movieId: number, page: number = 1, lang: string = 'en-US') => {
    return useQuery(QueryKeys.MovieList, async () => {
        return await Get<MovieList>(`movie/${movieId}/lists?language=${lang}&page=${page}`);
    });
};

const useMovieDetail = (movieId: number, lang: string = 'en-US') => {
     return useQuery(QueryKeys.MovieDetail, async () => {
        return await Get<MovieList>(`movie/${movieId}?language=${lang}`);
    });
}

export { useMovieList, useMovieDetail };