import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'testServerN', content: 'content in here'}];

  onServerAdded(serverData: {name: string, content: string}): void {
    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content
    });
  }

  onBlueprintAdded(blueprintData: {name: string, content: string}): void {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.name,
      content: blueprintData.content
    });
  }
}
