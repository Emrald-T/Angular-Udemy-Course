import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    // template: `<p>This is a server</p>`,
    styles: [`
        p {
            color: black
        }
        .online {
            color: white
        }`]
})

export class ServerComponent {
    serverId = 10;
    serverStatus = 'Offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    }

    getStatus(): string {
        return this.serverStatus;
    }

    getColor(): string {
        return this.serverStatus === 'Online' ? 'green' : 'red';
    }
}
