import {Article} from "./article.interface";

export interface ArticleRepositoryInterface {
  fetchAllArticlesAbout(keyword: string): Article[];
  fetchAllArticlesPublishedBy(publisher: string): Article[];
  fetchAllArticlesFromTo(from: string, to: string): Article[];
}
