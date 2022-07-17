import useTheme from "./useTheme";
import useColorScheme from "./useColorScheme";
import useCachedResources from "./useCachedResources";
import {
  useMovieCredits,
  useMovieDetail,
  useMovieList,
  useMovieVideos,
  usePopular,
  useTopRated,
} from "./Movie/MovieHook";
import { usePopularPeople } from "./People/PeopleHook";
import { useAccountProfile } from "./Account/AccountHook";

export {
  useTheme,
  useColorScheme,
  useCachedResources,
  useMovieList,
  usePopularPeople,
  usePopular,
  useTopRated,
  useMovieDetail,
  useMovieCredits,
  useMovieVideos,
  useAccountProfile
};
