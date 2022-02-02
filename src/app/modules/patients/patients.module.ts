import { AppointmentsModule } from './../appointments/appointments.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PatientInfoComponent } from './patient-info/patient-info.component'
import { BookingListComponent } from './booking-list/booking-list.component'
import { RouterModule } from '@angular/router'
import { PatientsToolbarComponent } from 'src/app/components/toolbars/patients/patients.component'
import { PatientsInfoToolbarComponent } from 'src/app/components/toolbars/patients-info-toolbar/patients-info-toolbar.component'
import { DashboardModule } from '../dashboard/dashboard.module'
import { AppRoutingModule } from 'src/app/app-routing.module'
import { PatientsProfileModalBodyComponent } from 'src/app/components/modal-components/add/add-patient/patients-profile-modal-body.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { IconsModule } from '../icon/icon.module'
import { CheckboxComponent } from 'src/app/components/utilities/common/checkbox/checkbox.component'

@NgModule({
	declarations: [
		PatientInfoComponent,
		BookingListComponent,
		PatientsToolbarComponent,
		PatientsInfoToolbarComponent,
		CheckboxComponent,
		PatientsProfileModalBodyComponent,
	],
	imports: [
		CommonModule,
		DashboardModule,
		AppRoutingModule,
		RouterModule,
		AppointmentsModule,
		FormsModule,
		ReactiveFormsModule,
		IconsModule,
	],
	exports: [
		PatientsToolbarComponent,
		PatientsInfoToolbarComponent,
		CheckboxComponent,
		PatientsProfileModalBodyComponent,
	],
})
export class PatientsModule {}
