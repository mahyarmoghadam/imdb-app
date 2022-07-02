import { QueryKeys } from '@constants';
import { useQuery } from "react-query";
import { Get } from "@generalService"
import { MovieCredits, MovieDetail, MovieImages, MovieList, MovieReviews, MovieTopRated, MovieVideos } from "@models";

const useMovieList = (movieId: number, page: number = 1, lang: string = 'en-US') => {
    return useQuery(QueryKeys.MovieList, async () => {
        return await Get<MovieList>(`movie/${movieId}/lists?language=${lang}&page=${page}`);
    });
};

const useMovieDetail = (movieId: number, lang: string = 'en-US') => {
    return useQuery(QueryKeys.MovieDetail, async () => {
        return await Get<MovieDetail>(`movie/${movieId}?language=${lang}`);
    });
}

const useMovieVideos = (movieId: number, lang: string = 'en-US') => {
    return useQuery(QueryKeys.MovieVideos, async () => {
        return await Get<MovieVideos>(`movie/${movieId}/videos?language=${lang}`);
    });
}

const useMovieCredits = (movieId: number, lang: string = 'en-US') => {
    return useQuery(QueryKeys.MovieCredits, async () => {
        return await Get<MovieCredits>(`movie/${movieId}/credits?language=${lang}`);
    });
}

const useMovieReviews = (movieId: number, page: number = 1, lang: string = 'en-US') => {
    return useQuery(QueryKeys.MovieReviews, async () => {
        return await Get<MovieReviews>(`movie/${movieId}/reviews?language=${lang}&page=${page}`);
    });
}

const useMovieImages = (movieId: number, lang: string = 'en-US') => {
    return useQuery(QueryKeys.MovieImages, async () => {
        return await Get<MovieImages>(`movie/${movieId}/images?language=${lang}`);
    });
}

const useTopRated = (page: number = 1, lang: string = 'en-US') => {
    return useQuery(QueryKeys.MovieTopRated, async () => {
        return await Get<MovieTopRated>(`movie/top_rated?language=${lang}&page=${page}`);
    });
}

export { useMovieList, useMovieDetail, useMovieCredits, useMovieVideos, useMovieReviews, useMovieImages, useTopRated };