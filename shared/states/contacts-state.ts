import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddContact } from '../actions/contact-action';
import { ContactStateModel } from './contact-state-model';
@State<ContactStateModel>({
  name: 'contacts',
  defaults: {
    contacts: [],
  },
})
@Injectable()
export class ContactState {
  @Selector()
  static getNbContacts(state: ContactStateModel) {
    return state.contacts.length;
  }
  @Selector()
  static getListeContacts(state: ContactStateModel) {
    return state.contacts;
  }

  @Action(AddContact)
  add(
    { getState, patchState }: StateContext<ContactStateModel>,
    { payload }: AddContact
  ) {
    const state = getState();
    patchState({
      contacts: [...state.contacts, payload],
    });
  }
}
