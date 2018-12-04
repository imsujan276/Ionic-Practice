import { Component } from '@angular/core';

@Component({
  selector: 'ngx-pipes-array',
  templateUrl: 'ngx-pipes-array.html'
})
export class NgxPipesArrayComponent {

  items1 = [1, 2, 3, 4,2, 4, 5];

  items2 = [null, 1, false, undefined, 2, 0, 3, NaN, 4, ''];

  items3 = [
    {
      a: 1, 
      b: {
        c: 4
      }
    }, 
    {
      a: 2, 
      b: {
        c: 5
      }
    }, 
    {
      a: 3, 
      b: {
        c: 6
      }
    }, 
  ];

  arrayObject = [
    {id: 1, elm: 'foo', value: 0}, 
    {id: 2, elm: 'bar', value: 1}, 
    {id: 3, elm: 'foo', value: 2}, 
    {id: 4, elm: 'foo', value: 2}
  ];
  
  arrayNestedObject = [
    {id: 1, prop: { deep: 'foo' }},
    {id: 2, prop: { deep: 'bar' }},
    {id: 3, prop: { deep: 'foo' }},
    {id: 4, prop: { deep: 'bar' }}
  ];

  constructor() {
    console.log('Hello NgxPipesArrayComponent Component');
  }

}
