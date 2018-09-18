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
  filter = null;
  selected;
  filterflag = false;
  showSpinner = true;

  constructor(private route: ActivatedRoute, private detail: ProserviceService, private router: Router) { }

  ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
        let page = parseInt(params.get('f'));
        this.filter = params.get('filter');
        this.currentpage = page;

        if(this.filter)
        {  
            this.detail.getFilterPageData(this.currentpage, this.filter).subscribe(data => {
            this.movies = data['results'];
            this.next = data['next'];
            this.prev = data ['previous'];
            this.filterflag = true;
            this.showSpinner = false;
            });
        }
        else
        { 
          this.detail.getPageData(this.currentpage).subscribe(data => {
          this.movies = data['results'];
          this.next = data['next'];
          this.prev = data['previous'];
          this.filterflag = false;
          this.showSpinner = false;
        });
        }
      });
  }

  onNext(){
    if(this.next && this.filterflag)
    {
      this.nextpage = this.currentpage + 1;
      this.router.navigate(['/movie-list', this.nextpage, { filter: this.filter }]);
    }
    else if(this.next)
    {
    this.nextpage = this.currentpage + 1;
    this.router.navigate(['/movie-list', this.nextpage]);
    }
  }

  onPrev(){
    if(this.prev && this.filterflag)
    {
      this.nextpage = this.currentpage - 1;
      this.router.navigate(['/movie-list', this.nextpage, { filter: this.filter }]);
    }
   else if(this.prev)
    {
    this.nextpage = this.currentpage - 1;
    this.router.navigate(['/movie-list', this.nextpage]);
    }
  }

  onSelectFilter(event: any)
{
  this.selected = event.target.value;
  if(this.selected)
  {
    this.currentpage = 1;
    this.router.navigate(['/movie-list', this.currentpage, { filter: this.selected }]);
  }
}
}
