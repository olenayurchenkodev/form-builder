import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upper'
})
export class FirstCamelPipe implements PipeTransform {
  transform(value: string): string {
    let isFirst = true;
    let res = '';
    for (let s of value) {
      if (isFirst) {res = s.toUpperCase(); isFirst = false}
      else res += s
    }
    return res;
  }
}
