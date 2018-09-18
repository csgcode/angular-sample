import { Component, OnInit } from '@angular/core';
import { ProserviceService } from './../proservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  homecomp: boolean;
  movies;
  _date = new Date();
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
  showSpinner: boolean = true;
  showSpinner2: boolean = true;

  constructor(private http: ProserviceService) {
    this.homecomp = true;
   }

  ngOnInit() {
    this.http.getHomeData().subscribe(data => {
      this.movies = data;
      this.showSpinner = false;
      for(var i=0; i<6; i++)
      {
        this.movie_obj[i] = data[i];
      }
    });
    this._month = this._date.getMonth();
    this.http.getHomeMonthData(this._month+1).subscribe(data => {
    this.firstmonth = data;
    this.first = this.month[this._month];
    });
    this.http.getHomeMonthData(this._month+2).subscribe(data => {
      this.secmonth = data;
      this.sec = this.month[this._month + 1];
    });
    this.http.getHomeMonthData(this._month+3).subscribe(data => {
      this.thirdmonth = data;
      this.third = this.month[this._month + 2];
      this.showSpinner2 = false;
    });
  }
}
