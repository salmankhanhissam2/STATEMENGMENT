import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Appointment } from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  private appointments: Appointment[] = [
    { id: 1, title: 'Meeting', dateTime: '2024-07-07T10:00:00' },
    { id: 2, title: 'Doctor Appointment', dateTime: '2024-07-08T11:00:00' },
    { id: 3, title: 'Lunch with Client', dateTime: '2024-07-09T12:00:00' },
    { id: 4, title: 'Conference Call', dateTime: '2024-07-09T14:00:00' },
    { id: 5, title: 'Gym Session', dateTime: '2024-07-10T16:00:00' },
    { id: 6, title: 'Team Standup', dateTime: '2024-07-10T09:00:00' },
    { id: 7, title: 'Dentist Appointment', dateTime: '2024-07-11T10:00:00' },
    { id: 8, title: 'Product Demo', dateTime: '2024-07-11T13:00:00' },
    { id: 9, title: 'Birthday Celebration', dateTime: '2024-07-12T19:00:00' },
    { id: 10, title: 'Board Meeting', dateTime: '2024-07-12T09:00:00' }
  ];

  getAppointments(): Observable<Appointment[]> {
    return of(this.appointments);
  }

  addAppointment(appointment: Appointment): void {
    this.appointments.push(appointment);
  }

  deleteAppointment(id: number): void {
    this.appointments = this.appointments.filter(app => app.id !== id);
  }

  updateAppointmentsOrder(updatedAppointments: Appointment[]): void {
    this.appointments = updatedAppointments.slice();
  }
}
