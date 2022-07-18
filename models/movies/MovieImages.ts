export interface Backdrop {
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1?: any;
    vote_average: number;
    vote_count: number;
    width: number;
}

export interface Poster {
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1: string;
    vote_average: number;
    vote_count: number;
    width: number;
}

export interface MovieImages {
    id: number;
    backdrops: Backdrop[];
    posters: Poster[];
}