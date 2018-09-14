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

  getda(event: any){
    console.log(event.target.value);
  }

  submitdata() {
    console.log('\n\n\n\n\non submit called\n\n\n');
    console.log('function called');  
    console.log(this.name);
    console.log(this.web); 
    console.log(this.email);  
    console.log(this.msg); 
    
    if (this.name === '' || this.email === '' || this.msg === '') {
      console.log("empty");
      this._error = true;
    }
    else
    {
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
        console.log('sucess', data);
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
