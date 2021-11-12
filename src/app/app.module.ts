import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { LiensComponent } from './liens/liens.component';
import { ContactState } from '../../shared/states/contacts-state';

const appRoutes: Routes = [
  {
    path: 'contacts',
    loadChildren: () =>
      import('./contacts/contacts.module').then((m) => m.ContactsModule),
  },
];
const appRoutes: Routes2 = [
  {
    path: 'article',
    loadChildren: () =>
      import('./article/article.module').then((m) => m.ContactsModule),
  },
];


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgxsModule.forRoot([ContactState]),
  ],
  declarations: [AppComponent, HelloComponent, LiensComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
