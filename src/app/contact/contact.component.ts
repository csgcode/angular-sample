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
    
    this.contact = {
      name: this.name,
      email: this.email,
      website: this.web,
      message: this.email
    }
    
    this.sendcontact.postContact(this.contact).subscribe(data => {
      console.log('sucess', data);
    });

  }
}
