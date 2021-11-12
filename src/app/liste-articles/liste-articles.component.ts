import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Article } from '../../../shared/models/article';
import { ArticleState } from '../../../shared/states/article-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.component.html',
  styleUrls: ['./liste-articles.component.css'],
})
export class ListeArticlesComponent implements OnInit {
  constructor() {}
  @Select(ArticleState.getListeArticle) liste$: Observable<Article[]>;
  ngOnInit() {}
}
