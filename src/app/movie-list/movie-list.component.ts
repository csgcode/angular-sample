import { Component, OnInit } from '@angular/core';
import { ProserviceService } from './../proservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: any;
  count = 0;
  next ;
  prev ;
  a;
  selected ;
  page;
  showSpinner:boolean = true;

  constructor(private http: ProserviceService, private router: Router) { }

  ngOnInit() {
    this.dataFetch();
  }

  dataFetch()
  {
    this.http.getData().subscribe(data => {
      this.movies = data['results'];
      this.count = 1;
      this.next = data['next'];
      this.prev = data['previous'];
      this.showSpinner = false;
    });
  }

  onSelectPrev(){
    this.page = this.count - 1;
    this.router.navigate(['/movie-list', this.page, {}]);
  }

  onSelectNext(){
    this.page = this.count + 1;
    this.router.navigate(['/movie-list', this.page , {}]);
  }

getFilter(event: any)
{
  this.selected = event.target.value;
  if(this.selected)
    {
    this.http.getFilterData(this.selected).subscribe(data => {
      this.movies = data['results'];
      this.count = 1;
      this.next = data['next'];
      this.prev = data['previous'];
    });
   } 
}
onSelectFilter(event: any)
{
  this.selected = event.target.value;
  if(this.selected)
  {
    this.page = this.count;
    this.router.navigate(['/movie-list', this.page, { filter: this.selected }]);
  }
}
}
