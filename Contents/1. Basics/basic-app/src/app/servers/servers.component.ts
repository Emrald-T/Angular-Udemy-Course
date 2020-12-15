import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  mouseEntered = false;
  serverCreated = false;
  // serverCreateStatus = 'No Server created';
  serverName = '';
  servers = ['ServInd', 'ServKor', 'ServUSA'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 1000);
   }

  ngOnInit(): void {
  }

  onCreateServer(): void {
    // this.serverCreateStatus = `Server was created ${this.serverName}`;
    this.serverCreated = true;
    if (this.servers.indexOf(this.serverName) === -1) {
      this.servers.push(this.serverName);
    }
    this.serverName = '';
  }

  onMouseEnter(): void {
    this.mouseEntered = true;
  }

  onMouseLeave(): void {
    this.mouseEntered = false;
  }

  onUpdateServerName(event: any): void {
    this.serverName = event.target.value;
  }
}
