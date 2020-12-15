import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.css']
})
export class PanelsComponent implements OnInit {
  title = '';
  panelOpen = false;
  constructor() { }

  ngOnInit(): void {
  }

  onTogglePanel(): void {
    return;
  }
}
