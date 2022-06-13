import {HttpClient} from "@angular/common/http";
import {NewsResult} from "../interfaces/NewsResult";
import {environment} from "../../../environments/environment";
import {Injectable} from "@angular/core";
import {Articles} from "../interfaces/Articles";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticleRepository {

  constructor(private httpClient: HttpClient) {
  }

  fetchTopHeadlinesFromUs(): Observable<Articles[]>{
    return this.httpClient.get<NewsResult>(environment.newsApiUrl +
      'top-headlines?country=us&apiKey=' + environment.API_KEY).pipe(
        map((result) => {
          return result.articles
        })
    );
  }
}
