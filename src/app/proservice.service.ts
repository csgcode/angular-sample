import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface myData {
  obj: Object
}

@Injectable({
  providedIn: 'root'
})



export class ProserviceService {

  private baseUrl = 'http://127.0.0.1:8000/api/movie-list/';
  // private baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  private moviedetailUrl = 'http://127.0.0.1:8000/api/movie/';

  constructor(private http: HttpClient) {

   }

  getData() {
    return this.http.get(this.baseUrl);
  }

  getDetail(params)
  {
    console.log("service hit", this.moviedetailUrl + params.id);
    return this.http.get(this.moviedetailUrl + params.id);
  }
}
