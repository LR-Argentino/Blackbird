import { Injectable } from '@angular/core';
import {ArticleRepository} from "../repositories/articleRepository";
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private articleRepo: ArticleRepository) { }

  fetchTopHeadlinesFromUs() {
    return this.articleRepo.fetchTopHeadlinesFromUs();
  }
}
