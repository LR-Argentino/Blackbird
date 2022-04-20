import {Article} from "./article.interface";
import {Observable} from "rxjs";

export interface ArticleRepositoryInterface {
  fetchAllArticlesAbout(keyword: string): Observable<Article[]>;
  fetchAllArticlesPublishedBy(publisher: string): Observable<Article[]>;
  fetchAllArticlesFromTo(searchByItem: string, keyword: string, from: string, to: string): Observable<Article[]>;
}
