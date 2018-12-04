import { Component, Input } from '@angular/core';
import { Events } from 'ionic-angular';

/**
 * Generated class for the CommunicationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'communication',
  templateUrl: 'communication.html'
})
export class CommunicationComponent {

  @Input() param: string;

  constructor(private ev: Events) {
    console.log('Hello CommunicationComponent Component');
    this.publishEvent();
  }

  publishEvent(){
    setTimeout(()=>{
      this.ev.publish('notice', 'This is my custom notice Event');
    }, 2000)
  }

}
