import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { CallNumber } from '@ionic-native/call-number';
import { SMS } from '@ionic-native/sms';
import { CallLog } from '@ionic-native/call-log';
/**
 * Generated class for the CallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-call',
  templateUrl: 'call.html',
})
export class CallPage {

  logs;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private sms: SMS, 
              private call: CallNumber, 
              private alertCtrl: AlertController,
              private callLog: CallLog
            ) {

    // setInterval(()=>{
    //   this.logs = this.callLog.getCallLog([{
    //     "name": "date",
    //     "value": "",
    //     "operator": "like",
    //   }])
    //   console.log(this.logs)
    // }, 2000)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CallPage');
  }
  
  makeCall(){
    this.presentPrompt();
  }

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Enter Phone Number',
      inputs: [
        {
          name: 'phone',
          placeholder: 'phone'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Call',
          handler: data => {
            this.callNumber(data.phone)
          }
        }
      ]
    });
    alert.present();
  }

  callNumber(phone){
    this.call.callNumber(phone, true)
      .then(() => {
        console.log('Worked')
      })
      .catch((err) => {
        alert(JSON.stringify(err))
      })
  }

  
  sendSMS(){
    let options = {
      replaceLineBreakers : true,
      android : {
        // intent : "INTENT"
      }
    }
    this.sms.send('9849170030', 'My message', options)
      .then(() => {
        console.log('Worked')
        alert("Message sent")
      })
      .catch((err) => {
        alert(JSON.stringify(err))
      })
  }

}
