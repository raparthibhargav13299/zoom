import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { GraphQueryService } from './graph-query.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  contentArray: any;
  panelOpenState = false;
  constructor(private graphQueryService : GraphQueryService) { }
  id:any= 1;

  ngOnInit() {
  
    this.graphQueryService.getProgramTitles().subscribe(response => {
      console.log('content array',response);
      this.contentArray = response;
    }, error => {
      console.log('error',error);
    })
  }

 


  
}
