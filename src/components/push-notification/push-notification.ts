import { Component, Input } from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
/**
 * Generated class for the PushNotificationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'push-notification',
  templateUrl: 'push-notification.html'
})
export class PushNotificationComponent {

  @Input() param;

  data = { title:'', description:''};

  constructor(public navCtrl: NavController,
    public localNotifications: LocalNotifications,
    public platform: Platform,
    public alertCtrl: AlertController
  ){
    console.log('Hello PushNotificationComponent Component');
  }

  submit() {
    console.log(this.data);
    this.localNotifications.schedule({
       text: this.data.title != '' ? this.data.title : 'LocalNotification',
       led: 'FF0000',
       sound: this.setSound(),
       data: { secret: 'new_alert' },
    });
    let alert = this.alertCtrl.create({
      title: 'Congratulation!',
      subTitle: 'Notification setup successfully',
      buttons: ['OK']
    });
    alert.present();
    this.data = { title:'', description:''};
  }

  setSound() {
    if (this.platform.is('android')) {
      return 'file://assets/sounds/Rooster.mp3'
    } else {
      return 'file://assets/sounds/Rooster.caf'
    }
  }

}
