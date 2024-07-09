// import { Component, OnInit } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs';
// import { Appointment } from '../../models/appointment.model';
// import * as AppointmentsActions from '../../../store/appointments.actions';
// import { selectAllAppointments } from '../../../store/appointments.selectors';
// import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
// import { State } from '../../../store/appointments.reducer';
// import { take } from 'rxjs/operators';

// @Component({
//   selector: 'app-appointment-list',
//   templateUrl: './appointment-list.component.html',
//   styleUrls: ['./appointment-list.component.scss']
// })
// export class AppointmentListComponent implements OnInit {
//   appointments$: Observable<Appointment[]>;

//   constructor(private store: Store<State>) {
//     this.appointments$ = this.store.select(selectAllAppointments);
//   }

//   ngOnInit(): void {
//     this.store.dispatch(AppointmentsActions.loadAppointments());
//   }

//   drop(event: CdkDragDrop<string[]>): void {
//     if (event.previousIndex !== event.currentIndex) {
//       this.appointments$.pipe(take(1)).subscribe(appointments => {
//         moveItemInArray(appointments, event.previousIndex, event.currentIndex);
//         // Optionally, dispatch an action to save the new order to the store
//       });
//     }
//   }

//   deleteAppointment(id: number): void {
//     this.store.dispatch(AppointmentsActions.deleteAppointment({ id }));
//   }
// }


// appointment-list.component.ts
// import { Component, OnInit } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs';
// import { Appointment } from '../../models/appointment.model';
// import * as AppointmentsActions from '../../../store/appointments.actions';
// import { selectAllAppointments } from '../../../store/appointments.selectors';
// import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
// import { State } from '../../../store/appointments.reducer';
// import { take } from 'rxjs/operators';

// @Component({
//   selector: 'app-appointment-list',
//   templateUrl: './appointment-list.component.html',
//   styleUrls: ['./appointment-list.component.scss']
// })
// export class AppointmentListComponent implements OnInit {
//   appointments$: Observable<Appointment[]>;

//   constructor(private store: Store<State>) {
//     this.appointments$ = this.store.select(selectAllAppointments);
//   }

//   ngOnInit(): void {
//     this.store.dispatch(AppointmentsActions.loadAppointments());
//   }

//   drop(event: CdkDragDrop<Appointment[]>): void {
//     if (event.previousIndex !== event.currentIndex) {
//       this.appointments$.pipe(take(1)).subscribe(appointments => {
//         moveItemInArray(appointments, event.previousIndex, event.currentIndex);
//         // Optionally, dispatch an action to save the new order to the store
//         this.store.dispatch(AppointmentsActions.updateAppointmentsOrder({ appointments }));
//       });
//     }
//   }

//   deleteAppointment(id: number): void {
//     this.store.dispatch(AppointmentsActions.deleteAppointment({ id }));
//   }
// }

// appointment-list.component.ts

// import { Component, OnInit } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs';
// import { Appointment } from '../../models/appointment.model';
// import * as AppointmentsActions from '../../../store/appointments.actions';
// import { selectAllAppointments } from '../../../store/appointments.selectors';
// import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
// import { State } from '../../../store/appointments.reducer';
// import { map, take } from 'rxjs/operators';


// @Component({
//   selector: 'app-appointment-list',
//   templateUrl: './appointment-list.component.html',
//   styleUrls: ['./appointment-list.component.scss']
// })
// export class AppointmentListComponent implements OnInit {
//   appointments$: Observable<Appointment[]>;
//   allAppointments: Appointment[] = []; // Keep a copy of all appointments for filtering

//   constructor(private store: Store<State>) {
//     this.appointments$ = this.store.select(selectAllAppointments);
//   }

//   ngOnInit(): void {
//     this.store.dispatch(AppointmentsActions.loadAppointments());
//     this.appointments$.subscribe(appointments => {
//       this.allAppointments = appointments; // Store all appointments locally
//     });
//   }

//   drop(event: CdkDragDrop<Appointment[]>): void {
//     if (event.previousIndex !== event.currentIndex) {
//       this.appointments$.pipe(take(1)).subscribe(appointments => {
//         moveItemInArray(appointments, event.previousIndex, event.currentIndex);
//         this.store.dispatch(AppointmentsActions.updateAppointmentsOrder({ appointments }));
//       });
//     }
//   }

//   deleteAppointment(id: number): void {
//     this.store.dispatch(AppointmentsActions.deleteAppointment({ id }));
//   }

//   onDateSelected(selectedDate: Date): void {
//     this.appointments$.pipe(
//       take(1),
//       map(appointments => {
//         // Filter appointments for the selected date
//         return appointments.filter(appointment => {
//           // Parse appointment.date to Date object
//           const appointmentDate = new Date(appointment.date);
  
//           // Compare using getTime() method on Date objects
//           return appointmentDate.getTime() === selectedDate.getTime();
//         });
//       })
//     ).subscribe(filteredAppointments => {
//       // Handle filtered appointments
//       console.log('Appointments for selected date:', filteredAppointments);
//     });
//   }
// }
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Appointment } from '../../models/appointment.model';
import * as AppointmentsActions from '../../../store/appointments.actions';
import { selectAllAppointments } from '../../../store/appointments.selectors';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { State } from '../../../store/appointments.reducer';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {
  appointments$: Observable<Appointment[]>;
  allAppointments: Appointment[] = []; // Keep a copy of all appointments for filtering
  selectedDate: Date | undefined; // Track selected date

  constructor(private store: Store<State>) {
    this.appointments$ = this.store.select(selectAllAppointments);
  }

  ngOnInit(): void {
    this.store.dispatch(AppointmentsActions.loadAppointments());
    this.appointments$.subscribe(appointments => {
      this.allAppointments = appointments; // Store all appointments locally
    });
  }

  drop(event: CdkDragDrop<Appointment[]>): void {
    if (event.previousIndex !== event.currentIndex) {
      this.appointments$.pipe(take(1)).subscribe(appointments => {
        moveItemInArray(appointments, event.previousIndex, event.currentIndex);
        this.store.dispatch(AppointmentsActions.updateAppointmentsOrder({ appointments }));
      });
    }
  }

  deleteAppointment(id: number): void {
    this.store.dispatch(AppointmentsActions.deleteAppointment({ id }));
  }

  onDateSelected(selectedDate: Date): void {
    this.selectedDate = selectedDate;
    this.appointments$.pipe(
      take(1),
      map(appointments => {
        // Filter appointments for the selected date
        return appointments.filter(appointment => {
          // Parse appointment.date to Date object
          const appointmentDate = new Date(appointment.date);
  
          // Compare using getTime() method on Date objects
          return appointmentDate.getTime() === selectedDate.getTime();
        });
      })
    ).subscribe(filteredAppointments => {
      // Handle filtered appointments
      console.log('Appointments for selected date:', filteredAppointments);
    });
  }
}
