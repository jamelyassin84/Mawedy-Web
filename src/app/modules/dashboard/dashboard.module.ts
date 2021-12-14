import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AppointmentsComponent } from './appointments/appointments.component'
import { PatientOutreachComponent } from './patient-outreach/patient-outreach.component'
import { NewAppointmentsComponent } from './appointments/modals/new-appointments/new-appointments.component'
import { SelectTimeSlotComponent } from './appointments/modals/select-time-slot/select-time-slot.component'
import { SelectDoctorComponent } from './appointments/modals/select-doctor/select-doctor.component'
import { ConfirmationComponent } from './appointments/modals/confirmation/confirmation.component'
import { AssignAppointmentToComponent } from './appointments/modals/assign-appointment-to/assign-appointment-to.component'
import { RouterModule } from '@angular/router'
import { ToolbarComponent } from 'src/app/shared/home/toolbar/toolbar.component'
import { AppointmentsToolbarComponent } from 'src/app/components/toolbars/appointments-toolbar/appointments-toolbar.component'
import { StatusComponent } from 'src/app/components/status/status.component'
import { DashboardToolbarComponent } from 'src/app/components/toolbars/dashboard-toolbar/dashboard-toolbar.component'
import { AppRoutingModule } from 'src/app/app-routing.module'

@NgModule({
	declarations: [
		AppointmentsComponent,
		PatientOutreachComponent,
		NewAppointmentsComponent,
		SelectTimeSlotComponent,
		SelectDoctorComponent,
		ConfirmationComponent,
		AssignAppointmentToComponent,
		ToolbarComponent,
		AppointmentsToolbarComponent,
		StatusComponent,
		DashboardToolbarComponent,
	],
	imports: [CommonModule, AppRoutingModule, RouterModule],
	exports: [
		ToolbarComponent,
		AppointmentsToolbarComponent,
		StatusComponent,
		DashboardToolbarComponent,
	],
})
export class DashboardModule {}
