import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { AppointmentsService } from '../shared/services/appointments.service';
import * as AppointmentsActions from './appointments.actions';

@Injectable()
export class AppointmentsEffects {
  loadAppointments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppointmentsActions.loadAppointments),
      mergeMap(() =>
        this.appointmentsService.getAppointments().pipe(
          map(appointments => AppointmentsActions.loadAppointmentsSuccess({ appointments }))
        )
      )
    )
  );

  addAppointment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppointmentsActions.addAppointment),
      mergeMap(action =>
        this.appointmentsService.addAppointment(action.appointment).pipe(
          map(() => AppointmentsActions.loadAppointments())
        )
      )
    )
  );

  updateAppointment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppointmentsActions.updateAppointment),
      mergeMap(action =>
        this.appointmentsService.updateAppointment(action.appointment).pipe(
          map(() => AppointmentsActions.loadAppointments())
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private appointmentsService: AppointmentsService
  ) {}
}
