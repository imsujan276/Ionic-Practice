import { Component, Input } from '@angular/core';

import { InAppBrowser } from '@ionic-native/in-app-browser';
/**
 * Generated class for the NgxPipesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ngx-pipes',
  templateUrl: 'ngx-pipes.html'
})
export class NgxPipesComponent {

  @Input() param: string;

  constructor(private iab: InAppBrowser) {
    console.log('Hello NgxPipesComponent Component');
  }

  gotoUrl(){
    this.iab.create('https://github.com/danrevah/ngx-pipes');
  }

}
