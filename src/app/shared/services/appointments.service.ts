import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Appointment } from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  private appointments: Appointment[] = [
    { id: 1722859877890, title: 'Meeting', dateTime: '2024-07-07T10:00:00' },
    { id: 1722859877891, title: 'Doctor Appointment', dateTime: '2024-07-08T11:00:00' },
    { id: 1722859877892, title: 'Lunch with Client', dateTime: '2024-07-09T12:00:00' },
    { id: 1722859877893, title: 'Conference Call', dateTime: '2024-07-09T14:00:00' },
    { id: 1722859877894, title: 'Gym Session', dateTime: '2024-07-10T16:00:00' },
    { id: 1722859877843, title: 'Team Standup', dateTime: '2024-07-10T09:00:00' },
    { id: 1722859877843, title: 'Dentist Appointment', dateTime: '2024-07-11T10:00:00' },
    { id: 1722859877834, title: 'Product Demo', dateTime: '2024-07-11T13:00:00' },
    { id: 1722859877809, title: 'Birthday Celebration', dateTime: '2024-07-12T19:00:00' },
    { id: 1722859877895, title: 'Board Meeting', dateTime: '2024-07-12T09:00:00' }
  ];

  getAppointments(): Observable<Appointment[]> {
    return of(this.appointments);
  }

  addAppointment(appointment: Appointment): Observable<void> {
    this.appointments.push(appointment);
    return of();
  }

  deleteAppointment(id: number): Observable<void> {
    this.appointments = this.appointments.filter(app => app.id !== id);
    return of();
  }

  updateAppointment(updatedAppointment: Appointment): Observable<void> {
    const index = this.appointments.findIndex(app => app.id === updatedAppointment.id);
    if (index > -1) {
      this.appointments[index] = updatedAppointment;
    }
    return of();
  }

  updateAppointmentsOrder(updatedAppointments: Appointment[]): Observable<void> {
    this.appointments = updatedAppointments.slice();
    return of();
  }
}
