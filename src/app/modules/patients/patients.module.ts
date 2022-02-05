import { AppointmentsModule } from './../appointments/appointments.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PatientInfoComponent } from './patient-info/patient-info.component'
import { BookingListComponent } from './booking-list/booking-list.component'
import { RouterModule } from '@angular/router'
import { DashboardModule } from '../dashboard/dashboard.module'
import { AppRoutingModule } from 'src/app/app-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { IconsModule } from '../icon/icon.module'
import { CheckboxComponent } from 'src/app/components/utilities/common/checkbox/checkbox.component'

@NgModule({
	declarations: [PatientInfoComponent, BookingListComponent, CheckboxComponent],
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
	exports: [CheckboxComponent],
})
export class PatientsModule {}
