import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Appointment } from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  private appointments: Appointment[] = [
    { id: 1, title: 'Meeting', date: '2024-07-07' },
    { id: 2, title: 'Doctor Appointment', date: '2024-07-08' },
    { id: 3, title: 'Lunch with Client', date: '2024-07-09' },
    { id: 4, title: 'Conference Call', date: '2024-07-09' },
    { id: 5, title: 'Gym Session', date: '2024-07-10' },
    { id: 6, title: 'Team Standup', date: '2024-07-10' },
    { id: 7, title: 'Dentist Appointment', date: '2024-07-11' },
    { id: 8, title: 'Product Demo', date: '2024-07-11' },
    { id: 9, title: 'Birthday Celebration', date: '2024-07-12' },
    { id: 10, title: 'Board Meeting', date: '2024-07-12' }
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
