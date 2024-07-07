// appointments.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './appointments.reducer';

export const selectAppointmentsState = createFeatureSelector<State>('appointments');

export const selectAllAppointments = createSelector(
  selectAppointmentsState,
  (state: State) => state.appointments
);
