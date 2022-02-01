import { IconsModule } from './../icon/icon.module'
import { PassiveWorkingScheduleComponent } from './../../components/utilities/passive-working-schedule/passive-working-schedule.component'
import { ViewDoctorBodyComponent } from '../../components/modal-components/view/view-doctor/view-doctor-body.component'
import { WorkingScheduleComponent } from './../../components/utilities/working-schedule/working-schedule.component'
import { DoctorsProfileBodyComponent } from '../../components/modal-components/add/add-doctor/doctors-profile-body.component'

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DoctorsProfileComponent } from './doctors-profile/doctors-profile.component'
import { RouterModule } from '@angular/router'
import { DoctorsProfileToolbarComponent } from 'src/app/components/toolbars/doctors-profile/doctors-profile.component'
import { DashboardModule } from '../dashboard/dashboard.module'
import { AppRoutingModule } from 'src/app/app-routing.module'
import { RightBlurBackgroundModalComponent } from 'src/app/components/modals/right-blurr-background-modal/right-blur-background-modal.component'
import { DoctorAvailabilityModalBodyComponent } from 'src/app/components/modal-components/view/doctor-availability/doctor-availability-modal-body.component'
import { AppointmentsModule } from '../appointments/appointments.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
	declarations: [
		DoctorsProfileComponent,
		DoctorsProfileComponent,
		DoctorsProfileToolbarComponent,
		DoctorsProfileBodyComponent,
		WorkingScheduleComponent,
		ViewDoctorBodyComponent,
		PassiveWorkingScheduleComponent,
		DoctorAvailabilityModalBodyComponent,
		RightBlurBackgroundModalComponent,
	],
	imports: [
		CommonModule,
		DashboardModule,
		AppRoutingModule,
		RouterModule,
		IconsModule,
		AppointmentsModule,
		ReactiveFormsModule,
		FormsModule,
	],
	exports: [
		DoctorsProfileToolbarComponent,
		DoctorsProfileBodyComponent,
		WorkingScheduleComponent,
		ViewDoctorBodyComponent,
		PassiveWorkingScheduleComponent,
		RightBlurBackgroundModalComponent,
		DoctorAvailabilityModalBodyComponent,
	],
})
export class DoctorsProfileModule {}
