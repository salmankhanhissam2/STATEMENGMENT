import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppointmentFormComponent } from '../shared/components/appointment-form/appointment-form.component';
import { AppointmentListComponent } from '../shared/components/appointment-list/appointment-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { CalenderComponent } from '../shared/components/calender/calender.component'; // Corrected import

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppointmentFormComponent,
    AppointmentListComponent,
    CalenderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DragDropModule,
    MatIconModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatFormFieldModule, // Include MatFormFieldModule here
    MatInputModule, 
  ],
  exports: [
    AppointmentFormComponent,
    CalenderComponent // Added comma here
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-US' } // Example locale provider
  ],
})
export class AppointmentsModule { }
