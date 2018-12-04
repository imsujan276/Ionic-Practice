import { Component } from '@angular/core';

/**
 * Generated class for the GroupByComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'group-by',
  templateUrl: 'group-by.html'
})
export class GroupByComponent {

  myArray = [
    {
        name: "Apple",
        color: "Green",
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Grape",
        color: "Green"
    },
    {
        name: "Melon",
        color: "Yellow"
    },
    {
        name: "Orange",
        color: "Orange"
    }
];

  constructor() {
    console.log('Hello GroupByComponent Component');
  }

}
