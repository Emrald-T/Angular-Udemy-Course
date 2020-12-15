import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  timer: any;
  counter = 0;
  numbers = [];
  value = 5;
  title = 'directives-app';

  onStartGame(): void {
    const that = this;
    if (!this.timer) {
      this.timer = setInterval(() => {
        let value = that.counter;
        value += 1;
        if (value % 2 === 0) {
          this.numbers.push({num: value, type: 'even'});
        } else {
          this.numbers.push({num: value, type: 'odd'});
        }
        that.counter = value;
      }, 1000);
    }
  }

  onStopGame(): void {
    clearInterval(this.timer);
  }

  onResetGame(): void {
    this.counter = 0;
    this.numbers = [];
  }
}
