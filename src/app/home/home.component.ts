import { Component, OnInit } from '@angular/core';
import { ProserviceService } from './../proservice.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies;

  constructor(private http: ProserviceService) { }

  ngOnInit() {
    this.http.getHomeData().subscribe(data => {
      console.log('sucess inside list', data);
      this.movies = data;
     
    });
  }
  
}
