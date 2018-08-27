import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-sign',
  templateUrl: 'sign.html',
})
export class SignPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

next():void{
this.navCtrl.push(HomePage);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignPage');

    
  }

}
