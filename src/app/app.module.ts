import { InformationPage } from './../pages/information/information';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignPage } from '../pages/sign/sign';
import { service } from '../Services/services';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SignPage,
    InformationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SignPage,
    InformationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    service,
    {provide: ErrorHandler, useClass: IonicErrorHandler}

  ]
})
export class AppModule {}
