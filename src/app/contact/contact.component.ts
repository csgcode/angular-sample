import { Component, OnInit } from '@angular/core';

import { ProserviceService } from './../proservice.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name = '';
  email = '';
  web = '';
  msg = '';
  contact = {};
  post_sucess = false;
  _error = false;

  constructor(private sendcontact: ProserviceService) { }
  ngOnInit() {
  }

  getda(event: any) {
  }
  submitdata() {
    if (this.name === '' || this.email === '' || this.msg === '') {
      this._error = true;
      this.post_sucess = false;
    }
    else {
      this._error = false;
    }

    this.contact = {
      name: this.name,
      email: this.email,
      website: this.web,
      message: this.email
    }
    if (!this._error) {
      this.sendcontact.postContact(this.contact).subscribe(data => {
        this.post_sucess = true;
        this.name = '';
        this.email = '';
        this.web = '';
        this.email = '';
        this.msg = '';
      });
    }
  }
}
