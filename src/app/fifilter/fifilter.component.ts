import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { ProserviceService } from './../proservice.service';


@Component({
  selector: 'app-fifilter',
  templateUrl: './fifilter.component.html',
  styleUrls: ['./fifilter.component.css']
})
export class FifilterComponent implements OnInit {
  movies;
  nextpage: number;
  currentpage: number;
  next;
  prev;

  
  constructor(private route: ActivatedRoute, private detail: ProserviceService, private router: Router) { }

  ngOnInit() {
      // let page = parseInt(this.route.snapshot.paramMap.get('f'));
      // this.temp = page;
        this.route.paramMap.subscribe((params: ParamMap) =>{
        let page = parseInt(params.get('f'));
        this.currentpage = page;
        
        this.detail.getPageData(this.currentpage).subscribe(data => {
          console.log('sucess', data);
          this.movies = data['results'];
          this.next = data['next'];
          this.prev = data['previous'];
        });

      });
  }

  onNext(){
    if(this.next)
    {
    this.nextpage = this.currentpage + 1;
    console.log(this.nextpage, 'nexttpage');
    this.router.navigate(['/movie-list', this.nextpage]);
    }
  }

  onPrev(){
    if(this.prev)
    {
    this.nextpage = this.currentpage - 1;
    console.log(this.nextpage, 'nexttpage');
    this.router.navigate(['/movie-list', this.nextpage]);
    }
  }

}
