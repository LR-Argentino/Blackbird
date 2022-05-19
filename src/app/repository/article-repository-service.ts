import { Injectable } from '@angular/core';
import {ArticleRepositoryInterface} from "../entities/articleRepository.interface";
import {Article} from "../entities/article.interface";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ArticleRepositoryService implements ArticleRepositoryInterface{

  constructor(private http: HttpClient) { }

  fetchAllArticlesAbout(keyword: string): Observable<Article[]> {
    return this.http.get<Article[]>(environment.newsApiUrl + 'q=' + keyword + "&pageSize=100&apiKey=" + environment.API_KEY);
  }

  fetchAllArticlesFromTo(searchByItem:string, keyword: string, from: string, to: string): Observable<Article[]>{
    return this.http.get<Article[]>(environment.newsApiUrl + searchByItem + '=' + keyword + '&from' + '=' + from + '&to=' + to +"&apiKey=" + environment.API_KEY);
  }

  fetchAllArticlesPublishedBy(publisher: string): Observable<Article[]>  {
    return this.http.get<Article[]>(environment.newsApiUrl + 'domains=' + publisher);
  }


}
