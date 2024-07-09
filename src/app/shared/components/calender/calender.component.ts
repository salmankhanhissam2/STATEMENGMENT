import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Appointment } from '../../models/appointment.model';
import * as AppointmentsActions from '../../../store/appointments.actions'; // Check the correct path here
import { State } from '../../../store/appointments.reducer'; // Check the correct path here

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent {
  selected: Date | null | undefined;
  
  
  appointment: Appointment = { id: 0, title: '', date: '' };

  constructor(private store: Store<State>) {}

  onSubmit(): void {
    const newAppointment = { ...this.appointment, id: Date.now() };
    this.store.dispatch(AppointmentsActions.addAppointment({ appointment: newAppointment }));
    this.appointment = { id: 0, title: '', date: '' };
  }
}
