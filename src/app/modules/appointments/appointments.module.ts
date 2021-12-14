import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AppointmentsMonthComponent } from './appointments-month/appointments-month.component'
import { AppointmentsWeekComponent } from './appointments-week/appointments-week.component'
import { AppointmentsDayComponent } from './appointments-day/appointments-day.component'
import { RouterModule } from '@angular/router'
import { DashboardModule } from '../dashboard/dashboard.module'
import { AppRoutingModule } from 'src/app/app-routing.module'

@NgModule({
	declarations: [
		AppointmentsMonthComponent,
		AppointmentsWeekComponent,
		AppointmentsDayComponent,
	],
	imports: [CommonModule, DashboardModule, AppRoutingModule, RouterModule],
})
export class AppointmentsModule {}