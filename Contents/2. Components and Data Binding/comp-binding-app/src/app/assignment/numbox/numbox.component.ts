import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbox',
  templateUrl: './numbox.component.html',
  styleUrls: ['./numbox.component.css']
})
export class NumboxComponent implements OnInit {
  @Input() value: number;
  constructor() { }

  ngOnInit(): void {
  }

}
