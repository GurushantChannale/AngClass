import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-task',
  templateUrl: './directive-task.component.html',
  styleUrls: ['./directive-task.component.css']
})
export class DirectiveTaskComponent implements OnInit {

  toggle = true;
  logButtonClicks:any = [];
  constructor() { }
  
  ngOnInit() {
  }

  onClick(){
    this.toggle = this.toggle? false:true;
    this.logButtonClicks.push(new Date())
  }
}
