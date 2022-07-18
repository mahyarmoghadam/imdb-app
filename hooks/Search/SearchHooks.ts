import { QueryKeys } from '@constants';
import { useQuery } from "react-query";
import { Get } from "@generalService"
import { MovieList, SearchMovieRequest } from "@models";
import { queryStringify } from '@helpers';

const useSearchMovie = (request: SearchMovieRequest = new SearchMovieRequest()) => {
    const query = queryStringify(request);
    console.log('query', query)
    return useQuery(QueryKeys.SearchMovie, async () => {
        return await Get<MovieList>(`search/movie?${query}`);
    });
};

export { useSearchMovie };