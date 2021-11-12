import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddArticle } from '../actions/article-action';
import { RemoveArticle } from '../actions/article-action';
import { ArticleStateModel } from './article-state-model';

@State<ArticleStateModel>({
  name: 'articles',
  defaults: {
    articles: [],
  },
})
@Injectable()
export class ArticleState {
  @Selector()
  static getNbArticles(state: ArticleStateModel) {
    return state.articles.length;
  }
  @Selector()
  static getListeArticle(state: ArticleStateModel) {
    return state.articles;
  }

  @Action(AddArticle)
  add(
    { getState, patchState }: StateContext<ArticleStateModel>,
    { payload }: AddArticle
  ) {
    const state = getState();
    patchState({
      articles: [...state.articles, payload],
    });
  }

  @Action(RemoveArticle)
  remove(
    { getState, patchState }: StateContext<ArticleStateModel>,
    { payload }: RemoveArticle
  ) {
    const state = getState();
    patchState({
      articles: [...state.articles, payload],
    });
  }
}
