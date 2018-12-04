import { FingerprintAuthPage } from './../fingerprint-auth/fingerprint-auth';
import { ZoomImagePage } from './../zoom-image/zoom-image';
import { DateTimePage } from './../date-time/date-time';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ParallaxHeaderPage } from '../parallax-header/parallax-header';
import { BackgroundPage } from '../background/background';
import { ArreySortPage } from '../arrey-sort/arrey-sort';
import { CallPage } from '../call/call';
import { GroupbyPage } from '../groupby/groupby';
import { ComponentsPage } from '../components/components';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }


  redirectTo(index){
    switch(index){
      case 1: this.navCtrl.push(ParallaxHeaderPage); break;
      case 2: this.navCtrl.push(BackgroundPage); break;
      case 3: this.navCtrl.push(ArreySortPage); break;
      case 4: this.navCtrl.push(DateTimePage); break;
      case 5: this.navCtrl.push(CallPage); break;
      case 6: this.navCtrl.push(GroupbyPage); break;
      case 7: this.navCtrl.push(ZoomImagePage); break;
      case 8: this.navCtrl.push(ComponentsPage,{components_id: 8}); break;
      case 9: this.navCtrl.push(ComponentsPage,{components_id: 9}); break;
      case 10: this.navCtrl.push(ComponentsPage,{components_id: 10}); break;
      case 11: this.navCtrl.push(FingerprintAuthPage); break;
      case 12: this.navCtrl.push(ComponentsPage,{components_id: 12}); break;
      case 13: this.navCtrl.push(ComponentsPage,{components_id: 13}); break;
      default:  return; 
    }
  }
}
