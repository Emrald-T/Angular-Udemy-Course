import { Component, OnDestroy, OnInit } from '@angular/core';

import { interval, Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private counter: Subscription;

  constructor() { }

  ngOnInit(): void {
    // this.counter = interval(1000).subscribe((count: number) => {
    //   console.log(count);
    // });
    const countObservable = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count > 3) {
          observer.error(new Error('It\'s greater than 3'));
        }
        if (count === 5) {
          observer.complete();
        }
        count++;
      }, 1000);
    });

    this.counter = countObservable.pipe(filter((data: number) => {
        return data > 0;
      }), map((data: number) => {
        return `Round ${data + 1}`;
      })).subscribe(
        data => {
          console.log(data);
        },
        error => {
          alert(error.message);
        },
        () => {
          console.log('Complete');
        }
      );
  }

  ngOnDestroy(): void {
    this.counter.unsubscribe();
  }

}
