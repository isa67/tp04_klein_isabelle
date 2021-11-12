import { Component, VERSION } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ContactState } from '../../shared/states/contacts-state';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  @Select(ContactState.getNbContacts) nb$: Observable<number>;
  constructor() {}
}
