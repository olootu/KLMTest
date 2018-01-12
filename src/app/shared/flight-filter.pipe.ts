import { Pipe, PipeTransform } from '@angular/core';

import { Flights } from './flights';

@Pipe({
    name: 'flightfilter',
    pure: false
})
export class FlightFilterPipe implements PipeTransform {
  transform(items: Flights[], filter: Flights): Flights[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Flights) => this.applyFilter(item, filter));
  }

  /**
   * Perform the filtering.
   *
   * @param {Flights} flight The flight to compare to the filter.
   * @param {Flights} filter The filter to apply.
   * @return {boolean} True if flight satisfies filters, false if not.
   */
  applyFilter(flight: Flights, filter: Flights): boolean {
    for (const field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (flight[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        }
      }
    }
    return true;
  }
}
