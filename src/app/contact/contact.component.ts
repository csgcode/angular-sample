import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  formSubmit(formname,formemail,formweb,frommsg){
    console.log(formname);
    console.log(formemail);
    console.log(formweb);
    console.log(formmsg);
  }
}
