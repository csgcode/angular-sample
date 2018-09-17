import { Component, OnInit } from '@angular/core';
import { ProserviceService } from './../proservice.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homecomp:boolean;
  movies;
  _date = new Date()
  _month ;
  firstmonth;
  secmonth;
  thirdmonth;
  first;
  sec;
  third;
  movie_obj = [];
  month = [
            "January", "February","March","April","May",
            "June","July","August","September","October",
            "November","December"
          ];
  showSpinner:boolean = true;
  showSpinner2:boolean = true;


  constructor(private http: ProserviceService) {
    this.homecomp = true;
   }

  ngOnInit() {
    this.http.getHomeData().subscribe(data => {
      console.log('sucess inside list gethomedata', data);
      this.movies = data;
      
      this.showSpinner = false;
      
      console.log('console 0', data[0]);
      
      for(var i=0; i<6; i++)
      {
        this.movie_obj[i] = data[i];
      }
      
    });
    
    this._month = this._date.getMonth();
    console.log(this._month+1);
    console.log("date", this._date);
    
    this.http.getHomeMonthData(this._month+1).subscribe(data =>{
    this.firstmonth = data;
    this.first = this.month[this._month]
    console.log("try", this.firstmonth, this.first);
    });

    this.http.getHomeMonthData(this._month+2).subscribe(data =>{
      this.secmonth = data;
      this.sec = this.month[this._month + 1]
      console.log(this.secmonth, this.sec);
    });

    this.http.getHomeMonthData(this._month+3).subscribe(data =>{
      this.thirdmonth = data;
      this.third = this.month[this._month + 2]
      console.log(this.thirdmonth);
      this.showSpinner2 = false;
    });

    
  }
  



}
