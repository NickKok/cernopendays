import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class VisitData {

    constructor(public http: HttpClient) {
        console.log('Hello Data Provider');
    }

    getRemoteData(){
        console.log(this.http.get('https://raw.githubusercontent.com/cerndb/cern-openlab-oracle-hackzurich-2018/master/visit-points/all_points_full.pretty.json'));
    }

}
