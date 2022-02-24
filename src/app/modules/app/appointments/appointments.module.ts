import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { AppointmentsDayComponent } from './appointments-day/appointments-day.component'
import { AppointmentsMonthComponent } from './appointments-month/appointments-month.component'
import { AppointmentsWeekComponent } from './appointments-week/appointments-week.component'
@NgModule({
	declarations: [
		AppointmentsDayComponent,
		AppointmentsWeekComponent,
		AppointmentsMonthComponent,
	],
	imports: [SharedModule, CommonModule],
})
export class AppointmentsModule {}
