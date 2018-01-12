import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { FlightService } from './flight.service';

describe('FlightService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpModule],
      providers: [FlightService]
    });
  });

  it('should be created', inject([FlightService], (service: FlightService) => {
    expect(service).toBeTruthy();
  }));
});
