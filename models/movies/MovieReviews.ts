export interface AuthorDetails {
    name: string;
    username: string;
    avatar_path: string;
    rating?: number;
}

export interface MovieReview {
    author: string;
    author_details: AuthorDetails;
    content: string;
    created_at: Date;
    id: string;
    updated_at: Date;
    url: string;
}

export interface MovieReviews {
    id: number;
    page: number;
    results: MovieReview[];
    total_pages: number;
    total_results: number;
}
