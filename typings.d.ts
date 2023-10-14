type Category =
    | "business"
    | "entertainment"
    | "general"
    | "health"
    | "science"
    | "sports"
    | "technology"


type Article = {
    author: string | null;
    category: string;
    country: string;
    description: string
    image: string | null;
    languages: string;
    published_at: string;
    sources: string
    title: string
    url: string;
}

type Pagination = {
    count: Int16Array;
    linit: Int16Array;
    offset: Int;
    total: Int;
}

type NewsResponse = {
    pagination: Pagination;
    data: Article[]
}