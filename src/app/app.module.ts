import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms'; // Import FormsModule
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
    BrowserAnimationsModule, // Include BrowserAnimationsModule
    DragDropModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule, // Include FormsModule for ngForm
    StoreModule.forRoot({ appointments: appointmentsReducer }),
    EffectsModule.forRoot([AppointmentsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
    }),
    AppointmentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
