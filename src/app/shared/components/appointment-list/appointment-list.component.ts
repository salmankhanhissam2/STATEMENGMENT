import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Appointment } from '../../models/appointment.model';
import * as AppointmentsActions from '../../../store/appointments.actions';
import { selectAllAppointments } from '../../../store/appointments.selectors';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { State } from '../../../store/appointments.reducer';
import { take } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {
  appointments$: Observable<Appointment[]>;
  filteredAppointments: Appointment[] = [];
  allAppointments: Appointment[] = [];
  selectedDate: Date | undefined;
  // selectedAppointment: Appointment | null = null;
  displayedColumns: string[] = ['id', 'title', 'date', 'actions'];
  dataSource = new MatTableDataSource<Appointment>([]);
  selectedAppointment: Appointment | null = null;

  constructor(private store: Store<State>) {
    this.appointments$ = this.store.select(selectAllAppointments);
  }

  ngOnInit(): void {
    this.store.dispatch(AppointmentsActions.loadAppointments());
    this.appointments$.subscribe(appointments => {
      this.allAppointments = appointments;
      this.filterAppointments();
    });
  }

  drop(event: CdkDragDrop<Appointment[]>): void {
    if (event.previousIndex !== event.currentIndex) {
      this.appointments$.pipe(take(1)).subscribe(appointments => {
        const updatedAppointments = [...appointments];
        moveItemInArray(updatedAppointments, event.previousIndex, event.currentIndex);
        this.store.dispatch(AppointmentsActions.updateAppointmentsOrder({ appointments: updatedAppointments }));
      });
    }
  }

  deleteAppointment(id: number): void {
    this.store.dispatch(AppointmentsActions.deleteAppointment({ id }));
  }

  editAppointment(appointment: Appointment): void {
    this.selectedAppointment = { ...appointment };
  }

  onFormSubmitted(updatedAppointment: Appointment): void {
    if (this.selectedAppointment) {
      // Preserve the existing date while updating the title
      const existingAppointment = this.selectedAppointment;
      const updatedAppointmentWithDate: Appointment = { 
        ...existingAppointment, 
        title: updatedAppointment.title 
      };
      this.store.dispatch(AppointmentsActions.updateAppointment({ appointment: updatedAppointmentWithDate }));
      this.selectedAppointment = null;
    } else {
      // Handle adding a new appointment
      this.store.dispatch(AppointmentsActions.addAppointment({ appointment: updatedAppointment }));
    }
    // Ensure to refresh the appointment list after form submission
    this.appointments$.pipe(take(1)).subscribe(appointments => {
      this.allAppointments = appointments;
      this.filterAppointments();
    });
  }

  onDateSelected(selectedDate: Date): void {
    this.selectedDate = selectedDate;
    this.filterAppointments();
  }

  filterAppointments(): void {
    if (this.selectedDate) {
      const selectedDateString = this.selectedDate.toISOString().split('T')[0];
      this.filteredAppointments = this.allAppointments.filter(appointment => {
        const appointmentDateString = new Date(appointment.dateTime).toISOString().split('T')[0];
        return appointmentDateString === selectedDateString;
      });
    } else {
      this.filteredAppointments = this.allAppointments;
    }
  }
}
