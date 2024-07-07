// appointments.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppointmentFormComponent } from '../shared/components/appointment-form/appointment-form.component';
import { AppointmentListComponent } from '../shared/components/appointment-list/appointment-list.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppointmentFormComponent,
    AppointmentListComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    DragDropModule,
    MatIconModule,
    
     // Ensure FormsModule is imported if ngForm is used
  ],
  exports: [
    AppointmentFormComponent
  ]
})
export class AppointmentsModule { }
