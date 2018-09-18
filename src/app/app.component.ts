import { Component, OnInit } from '@angular/core';
import { ProserviceService } from './proservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Movie Review';
  homecomp: boolean;
  records = {};
  constructor(private tryserv: ProserviceService, private router: Router) {

  }
  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.homecomp = true;
  }
  home(){
    this.homecomp = true;
  }
  nohome(){
    this.homecomp = false;
  }
}
