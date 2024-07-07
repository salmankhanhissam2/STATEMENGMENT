// appointments.effects.ts
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

  constructor(
    private actions$: Actions,
    private appointmentsService: AppointmentsService
  ) {}
}
