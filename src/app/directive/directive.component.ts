// Directives are instructions in DOM
// *ngIf *ngFor  are are some inbuilt directioves
// strctural directive add or remove DOM element
// attribute directive don't add or remove elemet, they only change elemnt they were placed. like ngClass
// added like a attribute
// ngStyle helps in biding the styles dynamically.
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  serverCreated:boolean = false;
  serverStatus: string = 'online';

  serverName = ['abc', 'bcd','cab'];
  constructor() { 
    this.serverStatus =  Math.random() > 0.5? 'online': 'offline';
  }

  ngOnInit() {
  }

  getColor(){
    return this.serverStatus === 'online'? 'green': 'red';
  }
}
