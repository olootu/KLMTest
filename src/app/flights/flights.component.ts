import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FlightService } from './../services/flight.service';
import { Flights } from './../shared/flights';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/min';

@Component({
  selector: 'flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
@Injectable()
export class FlightsComponent implements OnInit {

  constructor(private flightService: FlightService) { }

  destinations: Flights[];
  isSelected: Boolean;
  detail: any = '';

  /**
   * @type {Flights} filter The object containing the filter values to apply to bookfilter.
   */
  filter: Flights = new Flights();

  ngOnInit() {
    this.flightService.getFlightList()
      .subscribe(response => {
      this.destinations = response;
   });
  }

  getDetail(place) {
    this.isSelected = true;
    this.detail = place;
    console.log(place);
  }
}
