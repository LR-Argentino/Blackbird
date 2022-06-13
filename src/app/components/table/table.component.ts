import { Component, OnInit } from '@angular/core';
import {NewsService} from "../../core/services/news.service";
import {Articles} from "../../core/interfaces/Articles";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  articles: Articles[] | undefined;
  constructor(private newsSerivce: NewsService) { }

  ngOnInit(): void {
    this.newsSerivce.fetchTopHeadlinesFromUs().subscribe((articles) => {
      this.articles = articles;
    })
  }

}
