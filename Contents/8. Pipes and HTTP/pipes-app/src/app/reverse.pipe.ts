import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): unknown {
    if (!value) {
      return value;
    } else {
      const strArray = value.split('');
      return strArray.reverse().join('');
    }
  }

}
