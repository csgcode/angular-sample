import { Component } from '@angular/core';
import { ProserviceService } from './proservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie Review';
  
  records = {};

  constructor(private tryserv: ProserviceService) {

  }
  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.records = this.tryserv.getData();
    console.log(this.records);
  }

}
