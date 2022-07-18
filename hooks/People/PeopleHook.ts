import { QueryKeys } from '@constants';
import { Get } from "@generalService";
import { PopularPeopleResult } from "@models";
import { useQuery } from "react-query";

const usePopularPeople = (page: number = 1, lang: string = 'en-US') => {

    return useQuery(QueryKeys.PeoplePopular, async () => {
        return await Get<PopularPeopleResult>(`person/popular?language=${lang}&page=${page}`);
    });
};

export { usePopularPeople };