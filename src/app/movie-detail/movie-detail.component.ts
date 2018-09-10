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

  constructor(private route: ActivatedRoute, private detail: ProserviceService) { }

  ngOnInit() {
      this.route.params.subscribe(params => {
        console.log(params);
        this.detail.getDetail(params).subscribe(data => {
        console.log('sucess', data);
        this.movie = data;
      });
    });
  }

}
