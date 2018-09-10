import { Component, OnInit } from '@angular/core';
import { ProserviceService } from './../proservice.service';

// interface myData {
//   obj: Object;
// }

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {
//   records =   [{ id: 11, name: 'Mr. Nice' },
//   { id: 12, name: 'Narco' },
//   { id: 13, name: 'Bombasto' },
//   { id: 14, name: 'Celeritas' },
//   { id: 15, name: 'Magneta' },
//   { id: 16, name: 'RubberMan' },
//   { id: 17, name: 'Dynama' },
//   { id: 18, name: 'Dr IQ' },
//   { id: 19, name: 'Magma' },
//   { id: 20, name: 'Tornado' }
// ];
  
  records:any;

  name = 'Goukl';
  email = 'Goukl';
  web = 'Goukl';
  msg = 'Goukl';

  constructor(private trydata: ProserviceService) { 

  }

  ngOnInit() {
    this.trydata.getData().subscribe(data => {
      console.log('sucess', data);
      this.records = data;
    });
  }

  testfun() {
    console.log('function called');  
    console.log(this.name);
    console.log(this.web); 
    console.log(this.email);  
    console.log(this.msg); 

    
     
  }

}
