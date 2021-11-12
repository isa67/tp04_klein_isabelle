import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Contact } from '../../../../shared/models/contact';
import { ContactState } from '../../../../shared/states/contacts-state';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-liste-contacts',
  templateUrl: './liste-contacts.component.html',
  styleUrls: ['./liste-contacts.component.css'],
})
export class ListeContactsComponent implements OnInit {
  constructor() {}

  @Select(ContactState.getListeContacts) liste$: Observable<Contact[]>;
  ngOnInit() {}
}


