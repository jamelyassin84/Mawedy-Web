import { SelectTimeSlotComponent } from '../../components/modal-components/edit/update-time-slot/select-time-slot-component.component'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AppointmentsComponent } from './appointments/appointments.component'
import { PatientOutreachComponent } from './patient-outreach/patient-outreach.component'
import { RouterModule } from '@angular/router'
import { ToolbarComponent } from 'src/app/shared/home/toolbar/toolbar.component'
import { AppointmentsToolbarComponent } from 'src/app/components/toolbars/appointments-toolbar/appointments-toolbar.component'
import { DashboardToolbarComponent } from 'src/app/components/toolbars/dashboard-toolbar/dashboard-toolbar.component'
import { AppRoutingModule } from 'src/app/app-routing.module'
import { StatusComponent } from 'src/app/components/utilities/dashboard/status/status.component'
import { AppointmentDetailsBodyComponent } from 'src/app/components/modal-components/view/appointment-details/appointment-details-body.component'
import { AppointmentCancellationBodyComponent } from 'src/app/components/modal-components/edit/update-appointment/appointment-cancellation-body.component'
import { AssignAppointmentToModalBodyComponent } from 'src/app/components/modal-components/edit/update-appointment-to/assign-appointment-to-modal-body.component'

import { AppointmentToolbarTabComponent } from 'src/app/components/utilities/appointments/appointment-toolbar-tab/appointment-toolbar-tab.component'
import { IconsModule } from '../icon/icon.module'

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
		SelectTimeSlotComponent,
		AppointmentToolbarTabComponent,
		PatientOutreachComponent,
	],
	imports: [CommonModule, AppRoutingModule, RouterModule, IconsModule],
	exports: [
		ToolbarComponent,
		AppointmentsToolbarComponent,
		StatusComponent,
		DashboardToolbarComponent,
		AppointmentDetailsBodyComponent,
		AppointmentCancellationBodyComponent,
		AssignAppointmentToModalBodyComponent,
		SelectTimeSlotComponent,
		AppointmentToolbarTabComponent,
		PatientOutreachComponent,
	],
})
export class DashboardModule {}
