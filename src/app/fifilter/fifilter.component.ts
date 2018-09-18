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
  selectedyear;
  filterflag = false;
  showSpinner = true;
  filteryear;

  constructor(private route: ActivatedRoute, private detail: ProserviceService, private router: Router) { }

  ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
        let page = parseInt(params.get('f'));
        this.selected = this.filter = params.get('filter');
        this.selectedyear = this.filteryear = params.get('year');
        this.currentpage = page;
        console.log(this.selected,this.selectedyear,'ngonint genre year');
        console.log(this.filter,this.filteryear, 'ng filter,filteryear');
        if(this.filter && this.filteryear)
        {  
            this.detail.getFilterMergeData(this.currentpage, this.filter, this.filteryear).subscribe(data => {
            this.movies = data['results'];
            this.next = data['next'];
            this.prev = data ['previous'];
            this.filterflag = true;
            this.showSpinner = false;
            });
        }

        else if(this.filter)
        {  
            this.detail.getFilterPageData(this.currentpage, this.filter).subscribe(data => {
            this.movies = data['results'];
            this.next = data['next'];
            this.prev = data ['previous'];
            this.filterflag = true;
            this.showSpinner = false;
            });
        }
        else if(this.filteryear)
        {  
            this.detail.getFilterPageData(this.currentpage, this.filteryear).subscribe(data => {
            this.movies = data['results'];
            this.next = data['next'];
            this.prev = data ['previous'];
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
    if(this.next && this.filterflag && this.filteryear)
    {
      console.log(this.filterflag,this.filteryear,'all in if');
      this.nextpage = this.currentpage + 1;
      this.router.navigate(['/movie-list', this.nextpage, { filter: this.filter , year :this.filteryear}]);
    }
    else if(this.next && this.filterflag )
    {
      console.log(this.filterflag,this.filteryear,'in genre');
      this.nextpage = this.currentpage + 1;
      this.router.navigate(['/movie-list', this.nextpage, { filter: this.filter }]);
    }
    else if(this.next && this.filteryear )
    {
      console.log(this.filterflag,this.filteryear,'in year');
      this.nextpage = this.currentpage + 1;
      this.router.navigate(['/movie-list', this.nextpage, { year: this.filteryear }]);
    }
    else if(this.next)
    {
    this.nextpage = this.currentpage + 1;
    this.router.navigate(['/movie-list', this.nextpage]);
    }
  }

  onPrev(){
    if(this.prev && this.filterflag && this.filteryear)
    {
      console.log(this.filterflag,this.filteryear,'all in if prev');
      this.nextpage = this.currentpage - 1;
      this.router.navigate(['/movie-list', this.nextpage, { filter: this.filter , year : this.filteryear}]);
    }
    else if(this.prev && this.filterflag)
    {
      this.nextpage = this.currentpage - 1;
      this.router.navigate(['/movie-list', this.nextpage, { filter: this.filter }]);
    }
    else if(this.prev && this.filteryear)
    {
      this.nextpage = this.currentpage - 1;
      this.router.navigate(['/movie-list', this.nextpage, { year: this.filteryear }]);
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
  if(this.selected && this.selectedyear)
  {
    console.log("inside sel year and gener :genre",this.selected,this.selectedyear);
    this.currentpage = 1;
    this.router.navigate(['/movie-list', this.currentpage, { filter: this.selected, year : this.selectedyear}]);

  }
  else if(this.selected)
  {
    this.currentpage = 1;
    this.router.navigate(['/movie-list', this.currentpage, { filter: this.selected }]);
  }
}

onSelectYear(event: any)
{
  this.selectedyear = event.target.value;
  if(this.selected && this.selectedyear)
  {
    console.log("inside sel year and gener :year",this.selected,this.selectedyear);
    this.currentpage = 1;
    this.router.navigate(['/movie-list', this.currentpage, { filter: this.selected, year : this.selectedyear}]);
  }
  
  else if(this.selectedyear)
  {
   this.currentpage = 1
    console.log(this.selectedyear, 'in year');
    this.router.navigate(['/movie-list', this.currentpage, { year: this.selectedyear }]);
  }
}


}
