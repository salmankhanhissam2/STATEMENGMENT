import { createAction, props } from '@ngrx/store';
import { Appointment } from '../shared/models/appointment.model';

export const loadAppointments = createAction('[Appointments] Load Appointments');
export const loadAppointmentsSuccess = createAction(
  '[Appointments] Load Appointments Success',
  props<{ appointments: Appointment[] }>()
);

export const addAppointment = createAction(
  '[Appointments] Add Appointment',
  props<{ appointment: Appointment }>()
);

export const deleteAppointment = createAction(
  '[Appointments] Delete Appointment',
  props<{ id: number }>()
);

export const updateAppointmentsOrder = createAction(
  '[Appointments] Update Appointments Order',
  props<{ appointments: Appointment[] }>()
);


export const updateAppointment = createAction(
  '[Appointments] Update Appointment',
  props<{ appointment: Appointment }>()
);
