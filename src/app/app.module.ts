import { NgxPipesArrayComponent } from './../components/ngx-pipes-array/ngx-pipes-array';
import { CommunicationComponent } from './../components/communication/communication';
import { ComponentsPage } from './../pages/components/components';
import { CallPage } from './../pages/call/call';
import { DateTimePage } from './../pages/date-time/date-time';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ParallaxHeaderPage } from '../pages/parallax-header/parallax-header';
import { ElasticHeaderDirective } from '../directives/elastic-header/elastic-header';
import { BackgroundPage } from '../pages/background/background';
import { CustomBackgroundDirective } from '../directives/custom-background/custom-background';
import { ArreySortPage } from '../pages/arrey-sort/arrey-sort';
import { PipesModule } from '../pipes/pipes.module';

import { CallNumber } from '@ionic-native/call-number';
import { SMS } from '@ionic-native/sms';
import { CallLog } from '@ionic-native/call-log';
import { GroupByComponent } from '../components/group-by/group-by';
import { GroupbyPage } from '../pages/groupby/groupby';
import { ZoomImageDirective } from '../directives/zoom-image/zoom-image';
import { ZoomImagePage } from '../pages/zoom-image/zoom-image';
import { customFunctions } from '../../../qodelogix-ios-app/src/providers/functions';

import {NgPipesModule} from 'ngx-pipes';
import { NgxPipesComponent } from '../components/ngx-pipes/ngx-pipes';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import { FingerprintAuthPage } from '../pages/fingerprint-auth/fingerprint-auth';
import { PushNotificationComponent } from '../components/push-notification/push-notification';

import { LocalNotifications } from '@ionic-native/local-notifications';
import { Autostart } from '@ionic-native/autostart';
import { Braintree} from '@ionic-native/braintree';
import { BraintreeComponent } from '../components/braintree/braintree';
import { OneSignal } from '@ionic-native/onesignal';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ParallaxHeaderPage,
    BackgroundPage,
    ElasticHeaderDirective,
    CustomBackgroundDirective,
    ZoomImageDirective,
    ArreySortPage,
    DateTimePage,
    CallPage,
    GroupByComponent,
    GroupbyPage,
    ZoomImagePage,
    ComponentsPage,
    CommunicationComponent,
    NgxPipesComponent,
    NgxPipesArrayComponent,
    PushNotificationComponent,
    FingerprintAuthPage,
    BraintreeComponent
  ],
  imports: [
    BrowserModule,
    PipesModule,
    IonicModule.forRoot(MyApp),
    NgPipesModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ParallaxHeaderPage,
    BackgroundPage,
    ArreySortPage,
    DateTimePage,
    CallPage,
    GroupbyPage,
    ZoomImagePage,
    ComponentsPage,
    FingerprintAuthPage,
  ],
  providers: [
    customFunctions,
    StatusBar,
    SplashScreen,
    CallNumber,
    SMS,
    CallLog,
    InAppBrowser,
    FingerprintAIO,
    LocalNotifications,
    Autostart,
    Braintree,
    OneSignal,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
