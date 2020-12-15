import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, propName: string, descending: boolean): unknown {
    if (!value.length) {
      return value;
    } else {
      const resultsArray = value;
      resultsArray.sort((item1, item2) => {
        let value1 = item1[propName];
        let value2 = item2[propName];
        // Check if date is compared
        if (propName === 'started') {
          value1 = value1.getTime();
          value2 = value2.getTime();
        }

        if (value1 > value2) {
          return descending ? -1 : 1;
        } else if (value1 < value2) {
          return descending ? 1 : -1;
        } else {
          return 0;
        }
      });
      return resultsArray;
    }
  }
}
