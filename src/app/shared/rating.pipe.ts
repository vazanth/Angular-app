import {Input, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'RatingPipe'
})
export class RatingPipe implements PipeTransform {
  Arr = Array;
  transform(value) {
    return (new Array(value).fill(0));
  }
}

