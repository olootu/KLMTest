import { TestBed, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlightsComponent } from './flights/flights.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

import { FlightFilterPipe } from './shared/flight-filter.pipe';
import { ObjectFilterPipe } from './shared/object-filter.pipe';
import { FlightService } from './services/flight.service';

import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FlightsComponent,
        FlightFilterPipe,
        ObjectFilterPipe
      ],
      imports: [
      FormsModule,
       MatFormFieldModule,
       MatInputModule,
       MatCardModule,
       FormsModule,
       HttpModule,
       BrowserAnimationsModule
       ],
       providers: [
         FlightService
       ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
