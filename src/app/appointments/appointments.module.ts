import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon'; 
import { MatTableModule } from '@angular/material/table';
import { MatOptionModule } from '@angular/material/core';
import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentFormComponent } from '../shared/components/appointment-form/appointment-form.component';
import { AppointmentListComponent } from '../shared/components/appointment-list/appointment-list.component';
import { CalendarComponent } from '../shared/components/calender/calender.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppointmentListComponent,
    AppointmentFormComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DragDropModule,
    MatIconModule,
    MatTableModule,
    MatProgressSpinnerModule,
    AppointmentsRoutingModule,
    MatOptionModule
  ]
})
export class AppointmentsModule { }
