import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup  } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contactsForm = new FormGroup({
    clientName : new FormControl('',[Validators.required]),
    clientId : new FormControl('',[Validators.min(2)]),
    clientPass : new FormControl('',[Validators.minLength(8)]),
    clientFeedback : new FormControl('')
  });
  contactsList:any[] = [];
  saveForm()
  {
    this.contactsList.push(this.contactsForm.value);
    localStorage.setItem("contacts" , JSON.stringify(this.contactsList))
    console.log(this.contactsForm)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
