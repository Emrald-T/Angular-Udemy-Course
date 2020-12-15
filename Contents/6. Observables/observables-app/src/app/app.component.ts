import { Component, OnInit } from '@angular/core';
import { ActivateService } from './activate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activated: boolean;

  constructor(private activSrv: ActivateService) {}

  ngOnInit(): void {
    this.activSrv.activateCalled.subscribe(data => {
      this.activated = data;
    });
  }
}
