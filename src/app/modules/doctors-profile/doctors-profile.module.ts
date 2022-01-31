import { IconsModule } from './../icon/icon.module'
import { PassiveWorkingScheduleComponent } from './../../components/utilities/passive-working-schedule/passive-working-schedule.component'
import { ViewDoctorFooterComponent } from './../../components/modal-components/view-doctor/view-doctor-footer/view-doctor-footer.component'
import { ViewDoctorBodyComponent } from './../../components/modal-components/view-doctor/view-doctor-body/view-doctor-body.component'
import { WorkingScheduleComponent } from './../../components/utilities/working-schedule/working-schedule.component'
import { DoctorsProfileBodyComponent } from './../../components/modal-components/doctors-profile/doctors-profile-body/doctors-profile-body.component'
import { DoctorsProfileFooterComponent } from './../../components/modal-components/doctors-profile/doctors-profile-footer/doctors-profile-footer.component'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DoctorsProfileComponent } from './doctors-profile/doctors-profile.component'
import { RouterModule } from '@angular/router'
import { DoctorsProfileToolbarComponent } from 'src/app/components/toolbars/doctors-profile/doctors-profile.component'
import { DashboardModule } from '../dashboard/dashboard.module'
import { AppRoutingModule } from 'src/app/app-routing.module'
import { RightBlurBackgroundModalComponent } from 'src/app/components/modals/right-blurr-background-modal/right-blur-background-modal.component'
import { DoctorAvailabilityModalBodyComponent } from 'src/app/components/modal-components/doctor-avaiability/doctor-availability-modal-body/doctor-availability-modal-body.component'
import { AppointmentsModule } from '../appointments/appointments.module'

@NgModule({
	declarations: [
		DoctorsProfileComponent,
		DoctorsProfileComponent,
		DoctorsProfileToolbarComponent,
		DoctorsProfileBodyComponent,
		DoctorsProfileFooterComponent,
		WorkingScheduleComponent,
		ViewDoctorBodyComponent,
		ViewDoctorFooterComponent,
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
	],
	exports: [
		DoctorsProfileToolbarComponent,
		DoctorsProfileBodyComponent,
		DoctorsProfileFooterComponent,
		WorkingScheduleComponent,
		ViewDoctorBodyComponent,
		ViewDoctorFooterComponent,
		PassiveWorkingScheduleComponent,
		RightBlurBackgroundModalComponent,
		DoctorAvailabilityModalBodyComponent,
	],
})
export class DoctorsProfileModule {}
