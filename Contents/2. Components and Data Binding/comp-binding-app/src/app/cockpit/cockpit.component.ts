import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{name: string, content: string}>();
  // tslint:disable-next-line: no-output-rename
  @Output('bpCreated') blueprintCreated = new EventEmitter<{name: string, content: string}>();
  @ViewChild('serverContentInput') contentInput: ElementRef;
  // newServerName = '';
  // newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement): void {
    this.serverCreated.emit({
      name: nameInput.value,
      content: this.contentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement): void {
    this.blueprintCreated.emit({
      name: nameInput.value,
      content: this.contentInput.nativeElement.value
    });
  }
}
