import { Component, OnInit } from '@angular/core';
import { ProserviceService } from './../proservice.service';


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

  constructor(private http: ProserviceService) { }

  ngOnInit() {
    this.dataFetch();
  }

  dataFetch()
  {
    this.http.getData().subscribe(data => {
      console.log('sucess inside list', data);
      this.movies = data['results'];
      this.count = 1;
      this.next = data['next'];
      this.prev = data['previous'];
      console.log(this.count, this.next, this.prev);
     
    });
  }

  getNext(){
    console.log('next');
      if(this.next){
      this.http.getDataURL(this.next).subscribe(data => {
      console.log('sucess inside list next', data);
      this.movies = data['results'];
      this.count++;
      this.next = data['next'];
      this.prev = data['previous'];
      console.log(this.count, this.next, this.prev);
      });
    }
  }
  
  getPrev(){
    console.log('prev3');
    if(this.prev)
    {
    this.http.getDataURL(this.prev).subscribe(data => {
      console.log('sucess inside list prev', data);
      this.movies = data['results'];
      this.count--;
      this.next = data['next'];
      this.prev = data['previous'];
      console.log(this.count, this.next, this.prev);
    });
  }
}

getFilter(event: any)
{
  console.log('select fun', event.target.value);
  this.selected = event.target.value;
  if(this.selected)
    {
    this.http.getFilterData(this.selected).subscribe(data => {
      console.log('sucess inside filter', data);
      this.movies = data['results'];
      this.count = 1;
      this.next = data['next'];
      this.prev = data['previous'];
      console.log(this.count, this.next, this.prev);
    });
   }
  

}


}
