import { Component,OnInit,ChangeDetectionStrategy } from '@angular/core';
import { user } from './user';
import { MyserviceService } from './myservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  title = 'servicepipes';
 data:Array<Map<string, string>>;
  headers: Array<string>;
  filters:Array<Ifilter>;
  constructor(){ }
    ngOnInit() {
      this.data = new Array(
        new Map([["Book ID","1"],["Book Title","Andriod for Expert"],["Book Author","George R.R"],["Book Year of Publish","1996"]]),
        new Map([["Book ID","2"],["Book Title","Complete Reference"],["Book Author","George P.R. Martin"],["Book Year of Publish","1998"]]),
        new Map([["Book ID","3"],["Book Title","BackBone JS"],["Book Author","kalvin R.V"],["Book Year of Publish","2000"]]),
        new Map([["Book ID","4"],["Book Title","Knock Out JS"],["Book Author","J.J Markin"],["Book Year of Publish","2005"]]),
        new Map([["Book ID","5"],["Book Title","Pointer in C"],["Book Author","Y P Kantikar"],["Book Year of Publish","2011"]]),
        new Map([["Book ID","6"],["Book Title","Big Data"],["Book Author","Pearson D A"],["Book Year of Publish","2011"]]),
        new Map([["Book ID","7"],["Book Title","A Dream of Spring"],["Book Author","George R.R. Martin"],["Book Year of Publish","2012"]]),
        new Map([["Book ID","8"],["Book Title","The Philosopher's Stone"],["Book Author","J.K. Rowling"],["Book Year of Publish","1997"]]),
        new Map([["Book ID","9"],["Book Title","The Chamber Of Secrets"],["Book Author","J.K. Rowling"],["Book Year of Publish","1998"]]),
        new Map([["Book ID","10"],["Book Title","The Prisoner of Azkaban"],["Book Author","J.K. Rowling"],["Book Year of Publish","1999"]]),

      );
      this.headers=Array.from((this.data[0]).keys());
      this.filters=new Array({ header: "Book ID",filter:""},{ header: "Book Title",filter:""},{ header: "Book Author",filter:""},{ header: "Book Year of Publish",filter:""})
    }
  }
  export interface Ifilter{ header: string; filter:string;}