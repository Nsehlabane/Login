import { HomePage } from './../home/home';
import { service } from './../../Services/services';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {

  details=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private service:service) {

    this.details=this.service.getDetails();
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad InformationPage');
  // }
 

  ok(){
    this.service.details=[];
    this.navCtrl.push(HomePage)
  }

}
