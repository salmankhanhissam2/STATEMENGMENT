// appointments.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Appointment } from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  private appointments: Appointment[] = [
    { id: 1, title: 'Meeting', date: '2024-07-07' },
    { id: 2, title: 'Doctor', date: '2024-07-08' }
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
}
