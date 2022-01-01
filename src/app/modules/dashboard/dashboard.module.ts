import { SelectTimeSlotComponent } from '../../components/modal-components/select-time-slot-component/select-time-slot-component.component'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AppointmentsComponent } from './appointments/appointments.component'
import { PatientOutreachComponent } from './patient-outreach/patient-outreach.component'
import { RouterModule } from '@angular/router'
import { ToolbarComponent } from 'src/app/shared/home/toolbar/toolbar.component'
import { AppointmentsToolbarComponent } from 'src/app/components/toolbars/appointments-toolbar/appointments-toolbar.component'
import { DashboardToolbarComponent } from 'src/app/components/toolbars/dashboard-toolbar/dashboard-toolbar.component'
import { AppRoutingModule } from 'src/app/app-routing.module'
import { StatusComponent } from 'src/app/components/utilities/status/status.component'
import { AppointmentDetailsBodyComponent } from 'src/app/components/modal-components/appointment-details/appointment-details-body/appointment-details-body.component'
import { AppointmentCancellationBodyComponent } from 'src/app/components/modal-components/appointment-cancellation/appointment-cancelation-body/appointment-cancellation-body.component'
import { AssignAppointmentToModalBodyComponent } from 'src/app/components/modal-components/assign-appointment-to/assign-appointment-to-modal-body/assign-appointment-to-modal-body.component'
import { AssignAppointmentToModalFooterComponent } from 'src/app/components/modal-components/assign-appointment-to/assign-appointment-to-modal-footer/assign-appointment-to-modal-footer.component'
import { AppointmentToolbarTabComponent } from 'src/app/components/utilities/appointment-toolbar-tab/appointment-toolbar-tab.component'

@NgModule({
	declarations: [
		AppointmentsComponent,
		ToolbarComponent,
		AppointmentsToolbarComponent,
		StatusComponent,
		DashboardToolbarComponent,
		AppointmentDetailsBodyComponent,
		AppointmentCancellationBodyComponent,
		AssignAppointmentToModalBodyComponent,
		AssignAppointmentToModalFooterComponent,
		SelectTimeSlotComponent,
		AppointmentToolbarTabComponent,
		PatientOutreachComponent,
	],
	imports: [CommonModule, AppRoutingModule, RouterModule],
	exports: [
		ToolbarComponent,
		AppointmentsToolbarComponent,
		StatusComponent,
		DashboardToolbarComponent,
		AppointmentDetailsBodyComponent,
		AppointmentCancellationBodyComponent,
		AssignAppointmentToModalBodyComponent,
		AssignAppointmentToModalFooterComponent,
		SelectTimeSlotComponent,
		AppointmentToolbarTabComponent,
		PatientOutreachComponent,
	],
})
export class DashboardModule {}
