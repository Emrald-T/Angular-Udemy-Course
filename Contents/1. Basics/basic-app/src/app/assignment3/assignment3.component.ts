import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styles: [`
    .gtFive {
      background-color: dodgerblue;
      color: white;
    }
  `]
})
export class Assignment3Component implements OnInit {
  showContents = false;
  activityLog = [];
  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleContents(): void {
    ++this.counter;
    const state = this.showContents;
    this.showContents = !state;
    this.activityLog.push(
      this.showContents ?
        {Sno: this.counter, Description: 'Made contents visible.', Timestamp: new Date().toISOString()} :
        {Sno: this.counter, Description: 'Made contents hidden.', Timestamp: new Date().toISOString()}
    );
  }
}
