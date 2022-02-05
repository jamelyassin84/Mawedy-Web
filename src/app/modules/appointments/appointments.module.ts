import { AppointmentPlaceholdersComponent } from './../../components/placeholders/appointment-placeholders/appointment-placeholders.component'
import { RightBlurBackgroundModalComponent } from './../../components/modals/right-blurr-background-modal/right-blur-background-modal.component'
import { DoctorAvailabilityModalBodyComponent } from './../../components/modal-components/view/doctor-availability/doctor-availability-modal-body.component'
import { PassiveWorkingScheduleComponent } from './../../components/utilities/doctor-profile/passive-working-schedule/passive-working-schedule.component'
import { WorkingScheduleComponent } from './../../components/utilities/doctor-profile/working-schedule/working-schedule.component'
import { DoctorsProfileBodyComponent } from './../../components/modal-components/add/add-doctor/doctors-profile-body.component'
import { DoctorsProfileToolbarComponent } from './../../components/toolbars/doctors-profile/doctors-profile.component'
import { DoctorsProfileComponent } from './../doctors-profile/doctors-profile/doctors-profile.component'
import { AppointmentsToolbarComponent } from './../../components/toolbars/appointments-toolbar/appointments-toolbar.component'
import { ToolbarComponent } from './../../shared/home/toolbar/toolbar.component'
import { AppointmentToolbarTabComponent } from './../../components/utilities/appointments/appointment-toolbar-tab/appointment-toolbar-tab.component'
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
import { AppRoutingModule } from 'src/app/app-routing.module'
import { ModalV2Component } from 'src/app/components/modalv2/modal-v2/modal-v2.component'
import { ClickStopPropagation } from 'src/app/directives/stop-propagation.directive'
import { IconsModule } from '../icon/icon.module'
import { DropdownDoctorComponent } from 'src/app/components/dropdowns/dropdown-doctor/dropdown-doctor.component'
import { ViewDoctorBodyComponent } from 'src/app/components/modal-components/view/view-doctor/view-doctor-body.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { DropdownPatientsComponent } from 'src/app/components/dropdowns/dropdown-patients/dropdown-patients.component'
import { DropdownMedicalServicesComponent } from 'src/app/components/dropdowns/dropdown-medical-services/dropdown-medical-services.component'
import { OutreachPlaceholdersComponent } from 'src/app/components/placeholders/outreach-placeholders/outreach-placeholders.component'
import { DoctorsPlaceholdersComponent } from 'src/app/components/placeholders/doctors-placeholders/doctors-placeholders.component'
import { PatientsPlaceholdersComponent } from 'src/app/components/placeholders/patients-placeholders/patients-placeholders.component'
import { ClinicPlaceholdersComponent } from 'src/app/components/placeholders/clinic-placeholders/clinic-placeholders.component'
import { PromotionPlaceholdersComponent } from 'src/app/components/placeholders/promotion-placeholders/promotion-placeholders.component'
import { NewAppointmentModalBodyComponent } from 'src/app/components/modal-components/add/add-appointment/new-appointment-modal-body.component'

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
		AppointmentToolbarTabComponent,
		ToolbarComponent,
		AppointmentsToolbarComponent,
		ViewDoctorBodyComponent,

		DoctorsProfileComponent,
		DoctorsProfileComponent,
		DoctorsProfileToolbarComponent,
		DoctorsProfileBodyComponent,
		WorkingScheduleComponent,
		PassiveWorkingScheduleComponent,
		DoctorAvailabilityModalBodyComponent,
		RightBlurBackgroundModalComponent,

		DropdownPatientsComponent,
		DropdownMedicalServicesComponent,
		AppointmentPlaceholdersComponent,
		OutreachPlaceholdersComponent,
		DoctorsPlaceholdersComponent,
		PatientsPlaceholdersComponent,
		ClinicPlaceholdersComponent,
		PromotionPlaceholdersComponent,
		NewAppointmentModalBodyComponent,
	],
	imports: [
		CommonModule,
		AppRoutingModule,
		RouterModule,
		BrowserAnimationsModule,
		IconsModule,
		FormsModule,
		ReactiveFormsModule,
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
		AppointmentToolbarTabComponent,
		ToolbarComponent,
		AppointmentsToolbarComponent,
		ViewDoctorBodyComponent,

		DoctorsProfileComponent,
		DoctorsProfileComponent,
		DoctorsProfileToolbarComponent,
		DoctorsProfileBodyComponent,
		WorkingScheduleComponent,
		PassiveWorkingScheduleComponent,
		DoctorAvailabilityModalBodyComponent,
		RightBlurBackgroundModalComponent,

		DropdownPatientsComponent,
		DropdownMedicalServicesComponent,
		AppointmentPlaceholdersComponent,
		OutreachPlaceholdersComponent,
		DoctorsPlaceholdersComponent,
		PatientsPlaceholdersComponent,
		ClinicPlaceholdersComponent,
		PromotionPlaceholdersComponent,
		NewAppointmentModalBodyComponent,
	],
})
export class AppointmentsModule {}
