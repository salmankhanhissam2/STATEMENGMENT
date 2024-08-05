import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { appointmentsReducer } from './store/appointments.reducer';
import { AppointmentsEffects } from './store/appointments.effects';
import { AppointmentsModule } from './appointments/appointments.module';

@NgModule({
  declarations: [
    AppComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    StoreModule.forRoot({ appointments: appointmentsReducer }),
    EffectsModule.forRoot([AppointmentsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
    }),
    AppointmentsModule // Import the AppointmentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
