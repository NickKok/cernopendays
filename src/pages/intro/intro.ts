import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-home',
  templateUrl: 'intro.html'
})
export class IntroPage {

  constructor(public navCtrl: NavController) {


  }

  goAnOtherPage() {
    this.navCtrl.setRoot(HomePage);
  }



}
