import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProserviceService } from './../proservice.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie;
  showSpinner:boolean = true;

  constructor(private route: ActivatedRoute, private detail: ProserviceService) { }

  ngOnInit() {
      this.route.params.subscribe(params => {
        this.detail.getDetail(params).subscribe(data => {
        this.movie = data;
        this.showSpinner = false;
      });
    });
  }

}
