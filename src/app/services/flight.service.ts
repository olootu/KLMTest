import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

import { Flights } from '../shared/flights';

@Injectable()
export class FlightService {

  constructor(private _http: Http) { }
  getFlightList(): Observable<Flights[]> {
    return this._http.get('app/data/destinations.json')
      .map((response: Response) => response.json().airports)
       .catch(error => {
          return Observable.throw(error);
        });
  }

}
