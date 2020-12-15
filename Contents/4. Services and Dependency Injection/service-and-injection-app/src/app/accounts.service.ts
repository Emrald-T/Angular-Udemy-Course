import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})

export class AccountsService {

  constructor(private loggingSrv: LoggingService) { }

  counter = 0;
  changeLog: {count: number, time: Date, message: string}[] = [];

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusChanged = new EventEmitter<string>();

  addAccount(newAccount: {name: string, status: string}): void {
    this.accounts.push(newAccount);
    const msg = `Added new account - name: ${newAccount.name}, status: ${newAccount.status}`;
    this.changeLog.push({
      count: ++this.counter,
      time: new Date(),
      message: msg
    });
    this.loggingSrv.logStatus(msg);
  }

  changeStatus(updateInfo: {id: number, newStatus: string}): void {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
    const msg = `Changed status of account to ${updateInfo.newStatus}`;
    this.changeLog.push({
      count: ++this.counter,
      time: new Date(),
      message: msg
    });
    this.loggingSrv.logStatus(msg);
  }
}
