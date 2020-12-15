import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AccountsService } from './accounts.service';
import { StatusLogService } from './assignment/status-log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [AccountsService]
})
export class AppComponent implements OnInit {
  panelHidden = false;
  accounts: {name: string, status: string}[];
  active: {name: string, active: boolean}[];
  inactive: {name: string, active: boolean}[];
  @ViewChild('panelContents') panelBody: ElementRef;

  constructor(private accountsSrv: AccountsService, private statSrv: StatusLogService) {
    this.accountsSrv.statusChanged.subscribe((status: string) => {
      alert('New status: ' + status);
    });
  }

  ngOnInit(): void {
    this.accounts = this.accountsSrv.accounts;
    this.active = this.statSrv.activeUsers;
    this.inactive = this.statSrv.inactiveUsers;
  }

  togglePanel(): void {
    this.panelHidden = !this.panelHidden;
    if (this.panelHidden) {
      this.panelBody.nativeElement.classList.add('hide');
    } else {
      this.panelBody.nativeElement.classList.remove('hide');
    }
  }
}
