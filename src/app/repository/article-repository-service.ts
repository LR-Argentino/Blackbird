import { Injectable } from '@angular/core';
import {ArticleRepositoryInterface} from "../entities/articleRepository.interface";
import {Article} from "../entities/article.interface";

@Injectable({
  providedIn: 'root'
})
export class ArticleRepositoryService implements ArticleRepositoryInterface{

  // TODO: Inject HttpClient
  constructor() { }

  // TODO: add fetchAllArticlesAbout logic
  fetchAllArticlesAbout(keyword: string): Article[] {
    return [];
  }

  // TODO: add fetchAllArticlesFromTo logic
  fetchAllArticlesFromTo(from: string, to: string): Article[] {
    return [];
  }

  // TODO: add fetchAllArticlesPublishedBy logic
  fetchAllArticlesPublishedBy(publisher: string): Article[] {
    return [];
  }


}
