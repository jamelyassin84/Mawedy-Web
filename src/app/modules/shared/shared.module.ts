import { RouterTestingModule } from '@angular/router/testing'
import { AppRoutingModule } from 'src/app/app-routing.module'
import { HttpClientModule } from '@angular/common/http'
import { PromotionPlaceholdersComponent } from 'src/app/modules/shared/placeholders/promotion-placeholders/promotion-placeholders.component'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AlertComponent } from './alert/alert.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { IconsModule } from '../icon/icon.module'

import { CalendarBadgeMonthComponent } from './components/appointments/calendar-badge-month/calendar-badge-month.component'
import { CalendarBadgeWeekComponent } from './components/appointments/calendar-badge-week/calendar-badge-week.component'
import { CalendarBadgeDayComponent } from './components/appointments/calendar-badge-day/calendar-badge-day.component'
import { CalendarStrikeThroughComponent } from './components/appointments/calendar-strike-through/calendar-strike-through.component'
import { ModalV2Component } from './modal/modal-v2.component'
import { ClickStopPropagation } from 'src/app/core/directives/stop-propagation.directive'
import { DropdownDoctorComponent } from './dropdowns/dropdown-doctor/dropdown-doctor.component'
import { AppointmentToolbarTabComponent } from './components/appointments/appointment-toolbar-tab/appointment-toolbar-tab.component'
import { ToolbarComponent } from 'src/app/shared/home/toolbar/toolbar.component'
import { AppointmentsToolbarComponent } from './toolbars/appointments-toolbar/appointments-toolbar.component'
import { ViewDoctorBodyComponent } from './modal-components/view/view-doctor/view-doctor-body.component'
import { UpdateServiceComponent } from './modal-components/update/update-service/update-service.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { IvyCarouselModule } from 'angular-responsive-carousel'
import { DoctorsProfileToolbarComponent } from './toolbars/doctors-profile/doctors-profile.component'
import { DoctorsProfileBodyComponent } from './modal-components/add/add-doctor/doctors-profile-body.component'
import { WorkingScheduleComponent } from './doctor-profile/working-schedule/working-schedule.component'
import { PassiveWorkingScheduleComponent } from './doctor-profile/passive-working-schedule/passive-working-schedule.component'
import { DoctorAvailabilityModalBodyComponent } from './modal-components/view/view-doctor-availability/doctor-availability-modal-body.component'
import { DropdownPatientsComponent } from './dropdowns/dropdown-patients/dropdown-patients.component'
import { DropdownMedicalServicesComponent } from './dropdowns/dropdown-medical-services/dropdown-medical-services.component'
import { AppointmentPlaceholdersComponent } from './placeholders/appointment-placeholders/appointment-placeholders.component'
import { OutreachPlaceholdersComponent } from './placeholders/outreach-placeholders/outreach-placeholders.component'
import { DoctorsPlaceholdersComponent } from './placeholders/doctors-placeholders/doctors-placeholders.component'
import { PatientsPlaceholdersComponent } from './placeholders/patients-placeholders/patients-placeholders.component'
import { ClinicPlaceholdersComponent } from './overlays/clinic-placeholders/clinic-placeholders.component'
import { NewAppointmentModalBodyComponent } from './modal-components/add/add-appointment/new-appointment-modal-body.component'
import { PatientsProfileModalBodyComponent } from './modal-components/add/add-patient/patients-profile-modal-body.component'
import { PatientsInfoToolbarComponent } from './toolbars/patients-info-toolbar/patients-info-toolbar.component'
import { DepartmentsPlaceholdersComponent } from './placeholders/departments-placeholders/departments-placeholders.component'
import { AddDepartmentModalBodyComponent } from './modal-components/add/add-department/add-department-modal-body.component'
import { AddMedicalServicesModalBodyComponent } from './modal-components/add/add-medical-services/add-medical-services-modal-body.component'
import { MedicalServicesComponent } from './placeholders/medical-services/medical-services.component'
import { StatusComponent } from './components/status/status.component'
import { DashboardToolbarComponent } from './toolbars/dashboard-toolbar/dashboard-toolbar.component'
import { AppointmentDetailsBodyComponent } from './modal-components/view/view-appointment-details/appointment-details-body.component'
import { AppointmentCancellationBodyComponent } from './modal-components/update/update-appointment/appointment-cancellation-body.component'
import { AssignAppointmentToModalBodyComponent } from './modal-components/update/update-appointment-to/assign-appointment-to-modal-body.component'
import { SelectTimeSlotComponent } from './modal-components/update/update-time-slot/select-time-slot-component.component'
import { WhosAccountComponent } from './overlays/whos-account/whos-account.component'
import { TabsComponent } from './clinic-profile/tabs/tabs.component'
import { ClinicServiceCardComponent } from './clinic-profile/clinic-service-card/clinic-service-card.component'
import { DropdownSmComponent } from './dropdowns/dropdown-sm/dropdown-sm.component'
import { DropdownLgComponent } from './dropdowns/dropdown-lg/dropdown-lg.component'
import { ViewDepartmentsComponent } from './modal-components/view/view-departments/view-departments.component'
import { CheckboxComponent } from './checkbox/checkbox.component'
import { PromotionsToolbarComponent } from './toolbars/promotions-toolbar/promotions-toolbar.component'
import { ClinicProfileToolbarComponent } from './toolbars/clinci-profile-toolbar/clinci-profile-toolbar.component'
import { PatientsToolbarComponent } from './toolbars/patients/patients.component'
import { RouterModule } from '@angular/router'

const components = [
	PromotionsToolbarComponent,
	AlertComponent,
	CheckboxComponent,
	ViewDepartmentsComponent,
	CalendarBadgeMonthComponent,
	CalendarBadgeWeekComponent,
	CalendarBadgeDayComponent,
	CalendarStrikeThroughComponent,
	ModalV2Component,
	TabsComponent,
	ClinicServiceCardComponent,
	DropdownSmComponent,
	DropdownLgComponent,
	DropdownDoctorComponent,
	AppointmentToolbarTabComponent,
	ToolbarComponent,
	AppointmentsToolbarComponent,
	ViewDoctorBodyComponent,
	UpdateServiceComponent,
	DoctorsProfileToolbarComponent,
	DoctorsProfileBodyComponent,
	WorkingScheduleComponent,
	PassiveWorkingScheduleComponent,
	DoctorAvailabilityModalBodyComponent,
	DropdownPatientsComponent,
	DropdownMedicalServicesComponent,
	AppointmentPlaceholdersComponent,
	OutreachPlaceholdersComponent,
	DoctorsPlaceholdersComponent,
	PatientsPlaceholdersComponent,
	ClinicPlaceholdersComponent,
	PromotionPlaceholdersComponent,
	NewAppointmentModalBodyComponent,
	PatientsProfileModalBodyComponent,
	PatientsInfoToolbarComponent,
	PatientsInfoToolbarComponent,
	DepartmentsPlaceholdersComponent,
	AddDepartmentModalBodyComponent,
	AddMedicalServicesModalBodyComponent,
	MedicalServicesComponent,
	StatusComponent,
	DashboardToolbarComponent,
	AppointmentDetailsBodyComponent,
	AppointmentCancellationBodyComponent,
	AssignAppointmentToModalBodyComponent,
	SelectTimeSlotComponent,
	WhosAccountComponent,
	ClinicProfileToolbarComponent,
	PatientsToolbarComponent,
]

const directives = [ClickStopPropagation]

const modules = [
	CommonModule,
	IconsModule,
	RouterModule,
	ReactiveFormsModule,
	FormsModule,
	BrowserAnimationsModule,
	IvyCarouselModule,
	HttpClientModule,
	AppRoutingModule,
	RouterTestingModule,
]

@NgModule({
	declarations: [...directives, ...components],
	imports: [...modules],
	exports: [...modules, ...directives, ...components],
})
export class SharedModule {}
