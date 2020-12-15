import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chefery';
  currentPage = 'RefBook';

  onNavigate(tabKey: string): void {
    this.currentPage = tabKey;
  }
}
