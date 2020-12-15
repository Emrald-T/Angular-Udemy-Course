import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './assignment1/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './assignment1/success-alert/success-alert.component';
import { Assignment1Component } from './assignment1/assignment1.component';
// import { AlertsComponent } from './assignment1/alerts/alerts.component';
import { PanelsComponent } from './panels/panels.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    Assignment1Component,
    PanelsComponent,
    Assignment2Component,
    Assignment3Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
