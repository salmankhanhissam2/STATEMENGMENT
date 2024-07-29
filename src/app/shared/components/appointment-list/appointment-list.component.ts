
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Appointment } from '../../models/appointment.model';
import * as AppointmentsActions from '../../../store/appointments.actions';
import { selectAllAppointments } from '../../../store/appointments.selectors';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { State } from '../../../store/appointments.reducer';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {
  appointments$: Observable<Appointment[]>;
  allAppointments: Appointment[] = [];
  selectedDate: Date | undefined;

  constructor(private store: Store<State>) {
    this.appointments$ = this.store.select(selectAllAppointments);
  }

  ngOnInit(): void {
    this.store.dispatch(AppointmentsActions.loadAppointments());
    this.appointments$.subscribe(appointments => {
      this.allAppointments = appointments;
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

  onDateSelected(selectedDate: Date): void {
    this.selectedDate = selectedDate;
    this.appointments$.pipe(
      take(1),
      map(appointments => appointments.filter(appointment => {
        const appointmentDate = new Date(appointment.date);
        return appointmentDate.getTime() === selectedDate.getTime();
      }))
    ).subscribe(filteredAppointments => {
      console.log('Appointments for selected date:', filteredAppointments);
    });
  }
}
