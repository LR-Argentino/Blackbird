export interface NewsResult {
  status: string;
  totalResults: number;
  articles: Array<{
    source: {id: number, name: string};
    author: string;
    title: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  }>
}
