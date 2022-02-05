/* DataBinding = communication
TypeScript code -----> Template(HTML)
String Interpolation: {{data}}
Property Binding: [property] = "data"

Template(HTML) -----> TypeScript Code (React to User Evevnts)
Event Binding: (event) = "expression"

Two-way-binding
[(ngModel)] = "data" */

// for output somthing or print somthing in html use string interpulation
// to change some value of a property use property binding
// don't mix both  [disabled]="{{disableButton}}" it's wrong it will break

// Note:
/*Important:  -->For events, you don't bind to onclick but only to click (=> (click)).

              -->The MDN (Mozilla Developer Network) offers nice lists of all 
                properties and events of the element
                you're interested in. Googling for YOUR_ELEMENT properties  or 
                YOUR_ELEMENT events  should yield nice results.
              --> The $event in between "" is the data emitted with that event 
                i.e (input)="onInput($event)"
              -->For Two-Way-Binding (covered in the next lecture) to work, you
                need to enable the ngModel  directive. This is done by adding the
                FormsModule  to the imports[]  array in the AppModule.*/

import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  // property binding
  disableButton: boolean = false;

  // inerpulation
  serverID = 123;
  serverStatus = 'offline';

  //event binding
  serverCreationStatus = 'server not created';
  serverName = 'Guru';

  constructor() {
    // property binding
    setTimeout(() => {
      this.disableButton = true;
    }, 2000);
   }

  ngOnInit() {
  }

  // inerpulation methode call
  getServerStatus(){
    return 'call by interpolation';
  }

  //property binding methode call
  getButtonStatus(){
      return  false;
  }

  // event binding 
  onCreateServer(){
    this.serverCreationStatus = 'Onserver Creation';
  }

  //event data passing and using 
  onUpdateServer(event: Event){
    this.serverName =  (<HTMLInputElement>event.target).value;
    //(<HTMLInputElement>event.target) it's casting 
  }
}
