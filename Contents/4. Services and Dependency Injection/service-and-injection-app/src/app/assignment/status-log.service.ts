import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class StatusLogService {
    user: {name: string, active: boolean};

    // users = [
    //     {name: 'Alex', active: true},
    //     {name: 'Drake', active: true},
    //     {name: 'Linda', active: true},
    //     {name: 'Madison', active: true},
    //     {name: 'Judith', active: false},
    //     {name: 'Clark', active: false}
    // ];
    activeUsers = [
        {name: 'Alex', active: true},
        {name: 'Drake', active: true},
        {name: 'Linda', active: true},
        {name: 'Madison', active: true}
    ];

    inactiveUsers = [
        {name: 'Judith', active: false},
        {name: 'Clark', active: false}
    ];

    changeStatus(index: number, active: boolean): void {
        let msg: string;
        if (active) {
            this.user = this.activeUsers[index];
            msg = 'Inactive';
            this.user.active = false;
            this.inactiveUsers.push(this.user);
            this.activeUsers.splice(index, 1);
        } else {
            this.user = this.inactiveUsers[index];
            msg = 'Active';
            this.user.active = true;
            this.activeUsers.push(this.user);
            this.inactiveUsers.splice(index, 1);
        }
        console.log(`Changed status of User - '${this.user.name}' to ${msg}`);
    }
}
