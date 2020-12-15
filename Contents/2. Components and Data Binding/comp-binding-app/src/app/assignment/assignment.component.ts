import { Component } from '@angular/core';

@Component({
    selector: 'app-assignment',
    templateUrl: './assignment.component.html'
})

export class AssignmentComponent {
    numbers = [];

    onNumberAdded(numData: {num: number, type: string}): void {
        this.numbers.push({num: numData.num, type: numData.type});
    }

    onResetCalled(): void {
        this.numbers = [];
    }
}
