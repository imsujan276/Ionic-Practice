import { Autostart } from '@ionic-native/autostart';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { customFunctions } from '../../../qodelogix-ios-app/src/providers/functions';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { CallPage } from '../pages/call/call';
 
import { OneSignal } from '@ionic-native/onesignal';
import { FingerprintAuthPage } from '../pages/fingerprint-auth/fingerprint-auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(private oneSignal: OneSignal,private autostart: Autostart, public localNotifications: LocalNotifications,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private ev: Events, private func: customFunctions) {
    // Autostart the app on boot / startup
    this.autostart.enable();

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.initiateLocalNotification();
      this.listenToEvent();

      this.oneSignalInitialize();

    //   window["plugins"].OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
    //   var notificationOpenedCallback = function(jsonData) {
    //     console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    //   };
  
    //   window["plugins"].OneSignal
    //     .startInit("225aadb4-8d28-45a8-a45a-4e9a304f045a", "YOUR_GOOGLE_PROJECT_NUMBER_IF_ANDROID")
    //     .handleNotificationOpened(notificationOpenedCallback)
    //     .endInit();

    });
  }

  oneSignalInitialize(){
    this.oneSignal.startInit('225aadb4-8d28-45a8-a45a-4e9a304f045a');
    this.oneSignal.enableSound(true);

    this.oneSignal.inFocusDisplaying(2);

    this.oneSignal.getIds().then(data => {alert(JSON.stringify(data))})

    this.oneSignal.promptForPushNotificationsWithUserResponse()
      .then(data => {
        alert(JSON.stringify(data))
      })
    
    this.oneSignal.handleNotificationOpened().subscribe((data) => {
      // this.nav.push(FingerprintAuthPage)
      alert(JSON.stringify(data['notification']['payload']['additionalData']))
    });

    this.oneSignal.endInit();
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  
  listenToEvent(){
    this.ev.subscribe('notice', data=> {
      this.func.presentToast(data, 3000, 'bottom')
    })
    
    this.localNotifications.on('click').subscribe((data)=> {
      let id =data.data.secret
      if(id == 'new_alert'){
        this.nav.push(CallPage);
      }else{
        alert(id)
      }
    })
  }

  initiateLocalNotification(){
    this.localNotifications.schedule({
      text: 'LocalNotification test',
      led: 'FF00ff',
      sound: null,
      data: { secret: 'test' },
      trigger: {at: new Date(new Date().getTime() + 7200)},
   });
  }

}
