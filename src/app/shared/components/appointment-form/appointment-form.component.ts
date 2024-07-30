import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Appointment } from '../../models/appointment.model';
import * as AppointmentsActions from '../../../store/appointments.actions'; // Check the correct path here
import { State } from '../../../store/appointments.reducer'; // Check the correct path here

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent implements OnInit {
  appointmentForm!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<State>) {}

  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', [Validators.required, this.dateValidator]]
    });
  }

  dateValidator(control: AbstractControl): { [key: string]: any } | null {
    const valid = !isNaN(Date.parse(control.value));
    return valid ? null : { invalidDate: { valid: false, value: control.value } };
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      const newAppointment: Appointment = { 
        id: Date.now(), 
        title: this.appointmentForm.value.title, 
        date: new Date(this.appointmentForm.value.date).toISOString() 
      };
      this.store.dispatch(AppointmentsActions.addAppointment({ appointment: newAppointment }));
      this.appointmentForm.reset();
    }
  }
}
