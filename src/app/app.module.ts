import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DataBidingTaskComponent } from "./databinding/data-biding-task/data-biding-task.component";
import { FormsModule } from "@angular/forms";
import { DirectiveComponent } from './directive/directive.component';
import { DirectiveTaskComponent } from './directive/directive-task/directive-task.component';
@NgModule({
  declarations: [		
    AppComponent,
      DatabindingComponent,
      DataBidingTaskComponent,
      DirectiveComponent,
      DirectiveTaskComponent
   ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
