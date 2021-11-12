import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { CommonModule } from '@angular/common';
import { ListeContactsComponent } from './liste-contacts/liste-contacts.component';
import { ContactComponent } from './contact/contact.component';
import { HasContactGuard } from './has-contact.guard';
import { SaisirContactComponent } from './saisir-contact/saisir-contact.component';
import { ContactState } from '../../../shared/states/contacts-state';

const appChild: Routes = [
  {
    path: 'listeContacts',
    component: ListeContactsComponent,
    canActivate: [HasContactGuard],
  },
  {
    path: 'saisirContact',
    component: SaisirContactComponent,
  },

  {
    path: 'contact/:id',
    component: ContactComponent,
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appChild),
    ReactiveFormsModule,
    NgxsModule.forFeature([ContactState]),
  ],

  declarations: [
    ListeContactsComponent,
    ContactComponent,
    SaisirContactComponent,
  ],
  providers: [HasContactGuard],
})
export class ContactsModule {}
