import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Appointment } from '../../models/appointment.model';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent implements OnInit, OnChanges {
  @Input() appointment: Appointment | null = null;
  @Output() formSubmitted = new EventEmitter<Appointment>();

  appointmentForm!: FormGroup;
  loading: boolean = false; 

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required]
    });

    if (this.appointment) {
      this.populateForm();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appointment'] && !changes['appointment'].isFirstChange()) {
      this.populateForm();
    }
  }

  populateForm(): void {
    if (this.appointment) {
      const date = new Date(this.appointment.dateTime).toISOString().split('T')[0];
      const time = new Date(this.appointment.dateTime).toTimeString().split(' ')[0].substring(0, 5);
      this.appointmentForm.patchValue({
        title: this.appointment.title,
        date: date,
        time: time
      });
    }
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      this.loading = true; 
      const date = this.appointmentForm.value.date;
      const time = this.appointmentForm.value.time;
      const dateTimeString = `${date}T${time}:00`;

      const updatedAppointment: Appointment = { 
        id: this.appointment ? this.appointment.id : Date.now(), 
        title: this.appointmentForm.value.title, 
        dateTime: new Date(dateTimeString).toISOString() 
      };

    
      setTimeout(() => {
        this.formSubmitted.emit(updatedAppointment);
        this.appointmentForm.reset();
        this.loading = false; 
      }, 1000); 
    }
  }
}
