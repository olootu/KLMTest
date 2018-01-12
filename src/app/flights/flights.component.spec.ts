import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { HttpModule } from '@angular/http';
import { FlightService } from './../services/flight.service';

import { FlightFilterPipe } from './../shared/flight-filter.pipe';
import { ObjectFilterPipe } from './../shared/object-filter.pipe';

import { FlightsComponent } from './flights.component';

describe('FlightsComponent', () => {
  let component: FlightsComponent;
  let fixture: ComponentFixture<FlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
      FlightsComponent,
      FlightFilterPipe,
      ObjectFilterPipe
      ],
      imports: [
      FormsModule,
       MatFormFieldModule,
       MatInputModule,
       BrowserAnimationsModule,
       MatCardModule,
       HttpModule
       ],
       providers: [
       FlightService
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
