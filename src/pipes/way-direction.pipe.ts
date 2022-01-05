import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'direction'
})
export class WayDirectionPipe implements PipeTransform {
  transform(value: string): string {
    if (value === '/') {
      return 'Login page';
    }
    return 'Form builder';
  }
}
