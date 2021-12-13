import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AppointmentsComponent } from './appointments/appointments.component'
import { PatientOutreachComponent } from './patient-outreach/patient-outreach.component'
import { NewAppointmentsComponent } from './appointments/modals/new-appointments/new-appointments.component'
import { SelectTimeSlotComponent } from './appointments/modals/select-time-slot/select-time-slot.component'
import { SelectDoctorComponent } from './appointments/modals/select-doctor/select-doctor.component'
import { ConfirmationComponent } from './appointments/modals/confirmation/confirmation.component'
import { AssignAppointmentToComponent } from './appointments/modals/assign-appointment-to/assign-appointment-to.component'
import { ToolbarComponent } from '../shared/home/toolbar/toolbar.component'
import { AppointmentsToolbarComponent } from '../toolbars/appointments-toolbar/appointments-toolbar.component'
import { RouterModule } from '@angular/router'
import { StatusComponent } from '../components/status/status.component'
import { DashboardToolbarComponent } from '../toolbars/dashboard-toolbar/dashboard-toolbar.component'

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
	imports: [CommonModule, RouterModule],
	exports: [
		ToolbarComponent,
		AppointmentsToolbarComponent,
		StatusComponent,
		DashboardToolbarComponent,
	],
})
export class DashboardModule {}
