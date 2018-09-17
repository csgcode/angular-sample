import { Component, OnInit } from '@angular/core';
import { ProserviceService } from './../proservice.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
  
export class TempComponent implements OnInit {

  movies;
  nextpage: number;
  currentpage: number;
  next;
  prev;


  constructor(private route: ActivatedRoute, private detail: ProserviceService, private router: Router) { 

  }

  ngOnInit() {
    
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
