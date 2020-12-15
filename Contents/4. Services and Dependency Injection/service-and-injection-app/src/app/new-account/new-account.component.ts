import { Component, EventEmitter, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: []
})
export class NewAccountComponent {
  constructor(private accountsSrv: AccountsService) {}

  onCreateAccount(accountName: string, accountStatus: string): void {
    this.accountsSrv.addAccount({
      name: accountName,
      status: accountStatus
    });
  }
}
