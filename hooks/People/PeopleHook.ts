import { QueryKeys } from '@constants';
import { Get } from "@generalService";
import { PopularPeopleResult } from "@models";
import { useQuery } from "react-query";

const usePopularPeople = (movieId: number, page: number = 1, lang: string = 'en-US') => {

    return useQuery(QueryKeys.PeoplePopular, async () => {
        return await Get<PopularPeopleResult>(`movie/${movieId}/lists?language=${lang}&page=${page}`);
    });
};

export { usePopularPeople };