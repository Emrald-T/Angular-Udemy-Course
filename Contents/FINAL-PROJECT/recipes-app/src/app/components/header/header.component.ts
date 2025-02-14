import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    @Input() title: string;
    headerItems = [{key: 'recipes', desc: 'Recipe Book'}, {key: 'shopping-list', desc: 'Shopping List'}];
    showMenu = false;

    onToggleMenu(): void {
        this.showMenu = !this.showMenu;
    }
}
