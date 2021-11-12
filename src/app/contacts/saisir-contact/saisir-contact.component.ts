import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Contact } from '../../../../shared/models/contact';
import { AddContact } from '../../../../shared/actions/contact-action';

@Component({
  selector: 'app-saisir-contact',
  templateUrl: './saisir-contact.component.html',
  styleUrls: ['./saisir-contact.component.css'],
})
export class SaisirContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store) {
    this.contactForm = this.formBuilder.group({
      nom: '',
      prenom: '',
      tel: '',
      favoris: false,
    });
  }

  ngOnInit() {}
  addContact() {
    let nom: string = this.contactForm.value['nom'];
    let prenom: string = this.contactForm.value['prenom'];
    let tel: string = this.contactForm.value['tel'];
    let favoris: boolean = this.contactForm.value['favoris'];

    let contact: Contact;

    contact = new Contact();
    contact.nom = nom;
    contact.tel = tel;
    contact.prenom = prenom;
    contact.favoris = favoris;

    console.log(contact);
    this.contactForm = this.formBuilder.group({
      nom: '',
      prenom: '',
      tel: '',
      favoris: false,
    });

    this.store.dispatch(new AddContact(contact));
  }
}
