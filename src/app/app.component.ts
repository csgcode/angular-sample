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
  homecomp:boolean;
  records = {};
  str = ' \ ';

  constructor(private tryserv: ProserviceService, private router: Router) {

  }
  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.homecomp = true;
    
      
   


    this.records = this.tryserv.getData();
    console.log(window.location.href,'\n\nloc');
    console.log(this.router.url)
  }

  home(){
    this.homecomp = true;
    console.log("click home")
  }

  nohome(){
    this.homecomp = false;
    console.log("click nohome")
  }

}
