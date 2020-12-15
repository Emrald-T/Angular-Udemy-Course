import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {
  username = 'Zedwing21';

  constructor() { }

  ngOnInit(): void {
  }

  public getUsername(): string {
    return this.username;
  }
  public setUsername(event: any): void {
    this.username = event.target.value;
  }

  onResetInput(): void {
    this.username = '';
  }
}
