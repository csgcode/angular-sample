import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface myData {
  obj: Object
}

@Injectable({
  providedIn: 'root'
})



export class ProserviceService {

  // private baseUrl = 'http://127.0.0.1:8000/api/';
  private baseUrl = 'http://csgokul.pythonanywhere.com/api/';
  private movielistUrl = this.baseUrl + 'movie-list/';
  private moviedetailUrl = this.baseUrl + 'movie/';
  private filterUrl = this.baseUrl + 'movie-list/?f=';
  private contactUrl = this.baseUrl + 'contact/';
  private homeurl = this.baseUrl + 'home/';

  constructor(private http: HttpClient) {

   }

  getData() {
    return this.http.get(this.movielistUrl);
  }

  getDetail(params)
  {
    console.log('service hit', this.moviedetailUrl + params.id);
    return this.http.get(this.moviedetailUrl + params.id);
  }

  getDataURL(params)
  {
    console.log('dataurlhit', params);
    return this.http.get(params);
  }

  getFilterData(params)
  {
    console.log('Filterhit', params);
    return this.http.get(this.filterUrl + params);
  }

  postContact(contact) {
    console.log('sucess postcontact called', contact);
    return this.http.post(this.contactUrl, contact);
    
  }

  getHomeData(){
    console.log('home hit');
    return this.http.get(this.homeurl);
    
  }

  getHomeMonthData(params){
    console.log('home hit');
    return this.http.get(this.homeurl + '?m=' + params);
    
  }

}
