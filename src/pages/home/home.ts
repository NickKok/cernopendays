import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,  public http: Http) {

    let url = "https://raw.githubusercontent.com/cerndb/cern-openlab-oracle-hackzurich-2018/master/visit-points/all_points_full.pretty.json";

       this.http.get(url).map(res => res.json()).subscribe(data => {

            //print the first image of the json
           console.log(data.rows[0].value["images"]["1"]);
 });

  }


}
