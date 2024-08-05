
import { createReducer, on } from '@ngrx/store';
import { Appointment } from '../shared/models/appointment.model';
import { loadAppointmentsSuccess, addAppointment, deleteAppointment, updateAppointmentsOrder, updateAppointment } from './appointments.actions';

export interface State {
  appointments: Appointment[];
}

export const initialState: State = {
  appointments: []
};

export const appointmentsReducer = createReducer(
  initialState,
  on(loadAppointmentsSuccess, (state, { appointments }) => ({ ...state, appointments })),
  on(addAppointment, (state, { appointment }) => ({
    ...state,
    appointments: [...state.appointments, appointment]
  })),
  on(deleteAppointment, (state, { id }) => ({
    ...state,
    appointments: state.appointments.filter(app => app.id !== id)
  })),
  on(updateAppointmentsOrder, (state, { appointments }) => ({
    ...state,
    appointments
  })),
  on(updateAppointment, (state, { appointment }) => ({
    ...state,
    appointments: state.appointments.map(app =>
      app.id === appointment.id ? appointment : app
    )
  }))
);
