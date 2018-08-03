import { InformationPage } from './../information/information';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  next2():void{
    this.navCtrl.push(InformationPage);
    }
}
