import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';

/**
 * Generated class for the FingerprintAuthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fingerprint-auth',
  templateUrl: 'fingerprint-auth.html',
})
export class FingerprintAuthPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private faio: FingerprintAIO) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FingerprintAuthPage');
  }

  login() {
    this.faio.isAvailable()
      .then(()=>{
        this.faio.show({
          clientId: 'appName',
          clientSecret: 'password', // Only Android
          localizedFallbackTitle: 'Use Pin', // Only iOS
          localizedReason: 'Please authenticate' // Only iOS
        })
          .then((result: any) => {
            alert('You are successfully Authenticated')
            // this.navCtrl.setRoot('HomePage');
          })
          .catch((error: any) => {
            console.log('err: ', error);
          });
      })
      .catch((error: any) => {
        console.log('err: ', error);
        alert('Fingerprint Auth is not supported')
      });
    
  }

}
