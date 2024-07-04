import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim',
  standalone: true
})
export class TrimPipe implements PipeTransform {

  transform(value: string, len: number): string {
    return value.slice(0, len) + '...';
  }
}
