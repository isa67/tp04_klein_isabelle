import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { ListeArticlesComponent } from '../liste-articles/liste-articles.component';
import { ArticleComponent } from './article.component';
import { HasArticleGuard } from './has-article.guard';
import { SaisirArticleComponent } from './saisir-contact/saisir-contact.component';
import { ArticleState } from '../../../shared/states/article-state';

const appChild: Routes2 = [
  {
    path: 'listeContacts',
    component: ListeArticlesComponent,
    canActivate: [HasArticleGuard],
  },
  {
    path: 'saisirArticle',
    component: SaisirArticleComponent,
  },

  {
    path: 'article/:id',
    component: ArticleComponent,
  },
  {
    path: 'article/:id',
    component: ArticleComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(appChild),
    NgxsModule.forFeature([ArticleState]),
  ],
  declarations: [
    ListeArticlesComponent,
    ArticleComponent,
    SaisirArticleComponent,
  ],
  providers: [HasArticleGuard],
})
export class ArticleModule {}
