import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsMonthComponent } from './appointments-month/appointments-month.component';
import { AppointmentsWeekComponent } from './appointments-week/appointments-week.component';
import { AppointmentsDayComponent } from './appointments-day/appointments-day.component';



@NgModule({
  declarations: [
    AppointmentsMonthComponent,
    AppointmentsWeekComponent,
    AppointmentsDayComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AppointmentsModule { }
