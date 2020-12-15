import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  timer: any;
  counter = 0;
  @Output() gameStart = new EventEmitter<{num: number, type: string}>();
  @Output() gameReset = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(): void {
    const that = this;
    if (!this.timer) {
      this.timer = setInterval(() => {
        let value = that.counter;
        value += 1;
        if (value % 2 === 0) {
          this.gameStart.emit({ num: value, type: 'even' });
        } else {
          this.gameStart.emit({ num: value, type: 'odd' });
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
    this.gameReset.emit();
  }
}
