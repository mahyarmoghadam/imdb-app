import { RequestTokenResultModel } from "./account/autentication";
import { ProfileModel } from "./account/profile";
import {
  fakeCast,
  banners,
  fakeGenres,
  fakeMovieList,
  profileActivity,
} from "./movies/fake-movie";
import { MovieCast, MovieCredits, MovieCrew } from "./movies/MovieCredits";
import { MovieDetail } from "./movies/MovieDetail";
import { MovieImages } from "./movies/MovieImages";

import { MovieList } from "./movies/MovieList";
import { MoviePopular } from "./movies/MoviePopular";
import { MovieReviews } from "./movies/MovieReviews";
import { MovieInfo, MovieTopRated } from "./movies/MovieTopRated";
import { MovieVideo, MovieVideos } from "./movies/MovieVideo";
import {
  PeopleInfo,
  PopularPeople,
  PopularPeopleResult,
} from "./people/PopularPeople";

export {
  fakeCast,
  banners,
  fakeGenres,
  fakeMovieList,
  profileActivity,
  //Movie
  MovieList,
  MovieCredits,
  MovieCast,
  MovieCrew,
  MovieVideos,
  MovieVideo,
  MovieReviews,
  MovieImages,
  MovieDetail,
  MovieTopRated,
  MoviePopular,
  MovieInfo,
  //People
  PopularPeopleResult,
  PopularPeople,
  PeopleInfo,
  //Account
  ProfileModel,
  RequestTokenResultModel
};
