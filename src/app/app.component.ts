import { Component } from '@angular/core';
import {NewsService} from "./core/services/news.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'syp';

  constructor(private newsService: NewsService) {
  }
  ngOnInit() {
    console.log(this.newsService.fetchTopHeadlinesFromUs());
  }
}
