
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentListComponent } from './shared/components/appointment-list/appointment-list.component';

const routes: Routes = [
  { path: 'appointments', component: AppointmentListComponent },
  { path: '', redirectTo: 'appointments', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
