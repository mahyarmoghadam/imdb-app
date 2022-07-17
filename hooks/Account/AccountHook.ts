import { QueryKeys } from "@constants";
import { Get, Post } from "@generalService";
import { ProfileModel, RequestTokenResultModel } from "@models";
import { useMutation, useQuery } from "react-query";

const useCreateRequestToken = () => {
  return useQuery(QueryKeys.AccountRequestToken, async () => {
    return await Get<RequestTokenResultModel>(`authentication/token/new`);
  });
};

const useCreateSessionId = () => {
  const createSessionMutation = useMutation(
    async (requestToken: string) =>
      await Post<RequestTokenResultModel>(`authentication/token/new`, {
        request_token: requestToken,
      })
  );

  return { createSessionMutation };
};

const useAccountProfile = () => {
  return useQuery(QueryKeys.MovieList, async () => {
    return await Get<ProfileModel>(`account`);
  });
};

export { useCreateRequestToken, useCreateSessionId, useAccountProfile };
