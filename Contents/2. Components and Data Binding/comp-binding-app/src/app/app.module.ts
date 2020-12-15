import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerComponent } from './server/server.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { GameControlComponent } from './assignment/game-control/game-control.component';
import { OddComponent } from './assignment/odd/odd.component';
import { EvenComponent } from './assignment/even/even.component';
import { NumboxComponent } from './assignment/numbox/numbox.component';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerComponent,
    AssignmentComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    NumboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
