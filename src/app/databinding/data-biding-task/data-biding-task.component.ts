import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding-task',
  templateUrl: './data-biding-task.component.html',
  styleUrls: ['./data-biding-task.component.css']
})
export class DataBidingTaskComponent implements OnInit {

  userName: string = '';
  constructor() { }

  ngOnInit() {
  }

  resetString(){
    this.userName = '';
  }

}
