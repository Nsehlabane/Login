import { service } from './../../Services/services';
import { InformationPage } from './../information/information';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

codetribers=[];

  constructor(public navCtrl: NavController, private service:service) {
this.codetribers=this.service. getCodetribers();
  }

  getProfile(index:number){
      this.service.addDetails(index);
      this.navCtrl.push(InformationPage)
     }
}
