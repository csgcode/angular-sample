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

  
  constructor(private route: ActivatedRoute, private detail: ProserviceService, private router: Router) { }

  ngOnInit() {
      // let page = parseInt(this.route.snapshot.paramMap.get('f'));
      // this.temp = page;
        this.route.paramMap.subscribe((params: ParamMap) =>{
        let page = parseInt(params.get('f'));
        this.filter = params.get('filter');
        console.log(this.filter, "filter  is here", params);
        this.currentpage = page;
        console.log('currentpage', this.currentpage);
        
        if(this.filter)
        {
          console.log('inside filter', this.filter)  
          this.detail.getFilterPageData(this.currentpage, this.filter).subscribe(data => {
            this.movies = data['results'];
            this.next = data['next'];
            this.prev = data ['previous'];
            this.filterflag = true;
          });
        }
        else
        {
        console.log('else')  
        this.detail.getPageData(this.currentpage).subscribe(data => {
          console.log('sucess', data);
          this.movies = data['results'];
          this.next = data['next'];
          this.prev = data['previous'];
          this.filterflag = false;
        });
        }
      });
  }

  onNext(){
    console.log('inside next');
    console.log('next:flag',this.prev,this.filterflag);
    if(this.next && this.filterflag)
    {
      console.log('next if andfilterflag')
      this.nextpage = this.currentpage + 1;
      this.router.navigate(['/movie-list', this.nextpage, { filter: this.filter }]);
    }
    else if(this.next)
    {
    this.nextpage = this.currentpage + 1;
    console.log(this.nextpage, 'nexttpage');
    this.router.navigate(['/movie-list', this.nextpage]);
    }
  }

  onPrev(){
    console.log('inside previous', this.currentpage);
    console.log('prev:flag',this.prev,this.filterflag);
    if(this.prev && this.filterflag)
    {
      console.log('prev if andfilterflag')
      this.nextpage = this.currentpage - 1;
      this.router.navigate(['/movie-list', this.nextpage, { filter: this.filter }]);
    }
   else if(this.prev)
    {
      console.log('prev if alone');
    this.nextpage = this.currentpage - 1;
    console.log(this.nextpage, 'nexttpage');
    this.router.navigate(['/movie-list', this.nextpage]);
    }
  }

  onSelectFilter(event: any)
{
  this.selected = event.target.value;
  console.log('select fun', this.selected);

  if(this.selected)
  {
    this.currentpage = 1;
    this.router.navigate(['/movie-list', this.currentpage, { filter: this.selected }]);

  }
}

}
