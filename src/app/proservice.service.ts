import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ProserviceService {

  // private baseUrl = 'http://127.0.0.1:8000/api/';
  private baseUrl = 'https://csgokul.pythonanywhere.com/api/';
  private movielistUrl = this.baseUrl + 'movie-list/';
  private moviedetailUrl = this.baseUrl + 'movie/';
  private filterUrl = this.baseUrl + 'movie-list/?f=';
  private contactUrl = this.baseUrl + 'contact/';
  private homeurl = this.baseUrl + 'home/';
  private pageUrl = this.baseUrl + 'movie-list/?page=';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.movielistUrl);
  }
  getDetail(params)
  {
    return this.http.get(this.moviedetailUrl + params.id);
  }
  getDataURL(params)
  {
    return this.http.get(params);
  }
  getFilterData(params)
  {
    return this.http.get(this.filterUrl + params);
  }
  postContact(contact) {
    return this.http.post(this.contactUrl, contact);
  }
  getHomeData(){
    return this.http.get(this.homeurl);
  }
  getHomeMonthData(params){
    return this.http.get(this.homeurl + '?m=' + params);
  }
  getPageData(params){
    return this.http.get(this.pageUrl + params);
  }
  getFilterPageData(page , filter){
    return this.http.get(this.filterUrl + filter + '&page=' + page);
  }
  getYearFilterData(page, year)
  {
    return this.http.get(this.filterUrl + year + '&page=' + page);
  }

  getFilterMergeData(page, filter, year){
    return this.http.get(this.filterUrl + filter + '&q=' + year + '&page=' + page);
  }

}
