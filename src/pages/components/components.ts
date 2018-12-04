import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ComponentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-components',
  templateUrl: 'components.html',
})
export class ComponentsPage {

  component_id;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.component_id = this.navParams.get('components_id') ? this.navParams.get('components_id') : false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComponentsPage');
  }

}
