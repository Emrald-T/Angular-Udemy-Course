import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filteredStatus = '';
  descSortOrder = true;
  asyncData = new Promise((resolve, reject) => {
    setTimeout(() => resolve('status'), 2000);
  });
  servers = [
    {
      instanceType: 'medium',
      name: 'Production',
      status: 'stable',
      started: new Date(2017, 0 , 15)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(2019, 3 , 6)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(1998, 7, 22)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(2000, 4, 30)
    }
  ];
  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}): {} {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }

  toggleSortOrder(): void {
    this.descSortOrder = !this.descSortOrder;
  }
}
