import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CalendarStrikeThroughComponent } from '../../components/utilities/appointments/calendar-strike-through/calendar-strike-through.component'
import { CalendarBadgeDayComponent } from './../../components/utilities/calendar-badges/calendar-badge-day/calendar-badge-day.component'
import { CalendarBadgeWeekComponent } from './../../components/utilities/calendar-badges/calendar-badge-week/calendar-badge-week.component'
import { CalendarBadgeMonthComponent } from './../../components/utilities/calendar-badges/calendar-badge-month/calendar-badge-month.component'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AppointmentsMonthComponent } from './appointments-month/appointments-month.component'
import { AppointmentsWeekComponent } from './appointments-week/appointments-week.component'
import { AppointmentsDayComponent } from './appointments-day/appointments-day.component'
import { RouterModule } from '@angular/router'
import { DashboardModule } from '../dashboard/dashboard.module'
import { AppRoutingModule } from 'src/app/app-routing.module'
import { ModalV2Component } from 'src/app/components/modalv2/modal-v2/modal-v2.component'
import { ClickStopPropagation } from 'src/app/directives/stop-propagation.directive'
import { IconsModule } from '../icon/icon.module'
import { DropdownDoctorComponent } from 'src/app/components/dropdowns/dropdown-doctor/dropdown-doctor.component'

@NgModule({
	declarations: [
		AppointmentsMonthComponent,
		AppointmentsWeekComponent,
		AppointmentsDayComponent,
		CalendarBadgeMonthComponent,
		CalendarBadgeWeekComponent,
		CalendarBadgeDayComponent,
		CalendarStrikeThroughComponent,
		ModalV2Component,
		ClickStopPropagation,
		DropdownDoctorComponent,
	],
	imports: [
		CommonModule,
		DashboardModule,
		AppRoutingModule,
		RouterModule,
		BrowserAnimationsModule,
		IconsModule,
	],
	exports: [
		AppointmentsMonthComponent,
		AppointmentsWeekComponent,
		AppointmentsDayComponent,
		CalendarBadgeMonthComponent,
		CalendarBadgeWeekComponent,
		CalendarBadgeDayComponent,
		CalendarStrikeThroughComponent,
		ModalV2Component,
		ClickStopPropagation,
		DropdownDoctorComponent,
	],
})
export class AppointmentsModule {}
