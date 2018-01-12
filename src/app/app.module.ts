import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
import { FlightsComponent } from './flights/flights.component';
import { FlightService } from './services/flight.service';
import { FlightFilterPipe } from './shared/flight-filter.pipe';
import { ObjectFilterPipe } from './shared/object-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    FlightFilterPipe,
    ObjectFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
