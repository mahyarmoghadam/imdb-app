export class SearchMovieRequest {
    query: string = "";
    language: string = "en-US";
    page: number = 1;
    include_adult: boolean = true;
    region?: string;
    year?: number;
    primary_release_year?: number;
}