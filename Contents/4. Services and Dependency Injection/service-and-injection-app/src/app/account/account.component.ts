import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: []
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private accountsSrv: AccountsService) {}

  onSetTo(status: string): void {
    this.accountsSrv.changeStatus({id: this.id, newStatus: status});
    this.accountsSrv.statusChanged.emit(status);
  }
}
