import { Injectable } from '@angular/core';
import {ArticleRepositoryService} from "../repository/article-repository-service";
import {Observable} from "rxjs";
import {Article} from "../entities/article.interface";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private articleRepo: ArticleRepositoryService) { }

  // TODO: Implement ArticleRepository methods
  fetchAllArticlesAbout(keyword: string): Observable<Article[]> {
    return this.articleRepo.fetchAllArticlesAbout(keyword);
  }
}
