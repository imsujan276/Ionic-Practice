import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SortByPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  
  transform(arr: Array<any>, prop: any, reverse: boolean = false): any {
    if (arr === undefined) return
    const m = reverse ? -1 : 1

    if(prop == ''){
      return arr.sort((x: any, y: any) => {
        return (x === y) ? 0 : (x < y) ? -1*m : 1*m
      });
    }else{
      return arr.sort((a: any, b: any): number => {
        const x = a[prop]
        const y = b[prop]
        return (x === y) ? 0 : (x < y) ? -1*m : 1*m
      })
    }
  }
}
