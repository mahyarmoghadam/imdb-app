const _API_KEY = '2a12ec511a2f51bac0c7a0c701e4d3f2';
const _TMDB_API = 'https://api.themoviedb.org/3';
const _TMDB_IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';


const generateUrl = (path?: string) => {
    if(path?.includes('?')){
        return `${_TMDB_API}/${path}&api_key=${_API_KEY}`
    }
    else{
        return `${_TMDB_API}/${path}?api_key=${_API_KEY}`
    }
}

export { generateUrl };