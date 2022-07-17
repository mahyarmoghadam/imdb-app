const _API_KEY = "2a12ec511a2f51bac0c7a0c701e4d3f2";
const _TMDB_API = "https://api.themoviedb.org";
const _TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/";

const generateUrl = (path?: string, version: number = 3) => {
  if (path?.includes("?")) {
    return `${_TMDB_API}/${version}/${path}&api_key=${_API_KEY}`;
  } else {
    return `${_TMDB_API}/${version}/${path}?api_key=${_API_KEY}`;
  }
};

const getImageUrl = (imagePath: string, width: string = "w500") => {
  return `${_TMDB_IMAGE_URL}/${width}/${imagePath}`;
};

export { generateUrl, getImageUrl };
