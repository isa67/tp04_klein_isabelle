import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select } from '@ngxs/store';
import { Article } from '../../../shared/models/article';
import { ArticleState } from '../../../shared/states/article-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent implements OnInit {
  id: number = 0;
  constructor() {
    //this.id = this.route.snapshot.params.id;
  }
  @Select(ArticleState.getListeArticle) liste$: Observable<Article[]>;

  ngOnInit() {}
}
