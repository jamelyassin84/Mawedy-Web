import { WorkingScheduleComponent } from './../../components/utilities/working-schedule/working-schedule.component'
import { DoctorsProfileBodyComponent } from './../../components/modal-components/doctors-profile/doctors-profile-body/doctors-profile-body.component'
import { DoctorsProfileFooterComponent } from './../../components/modal-components/doctors-profile/doctors-profile-footer/doctors-profile-footer.component'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DoctorsProfileComponent } from './doctors-profile/doctors-profile.component'
import { AvailabilityComponent } from './modals/availability/availability.component'
import { DoctorProfileModalComponent } from './modals/doctor-profile-modal/doctor-profile-modal.component'
import { RouterModule } from '@angular/router'
import { DoctorsProfileToolbarComponent } from 'src/app/components/toolbars/doctors-profile/doctors-profile.component'
import { DashboardModule } from '../dashboard/dashboard.module'
import { AppRoutingModule } from 'src/app/app-routing.module'

@NgModule({
	declarations: [
		DoctorsProfileComponent,
		AvailabilityComponent,
		DoctorProfileModalComponent,
		DoctorsProfileComponent,
		DoctorsProfileToolbarComponent,
		DoctorsProfileBodyComponent,
		DoctorsProfileFooterComponent,
		WorkingScheduleComponent,
	],
	imports: [CommonModule, DashboardModule, AppRoutingModule, RouterModule],
	exports: [
		DoctorsProfileToolbarComponent,
		DoctorsProfileBodyComponent,
		DoctorsProfileFooterComponent,
		WorkingScheduleComponent,
	],
})
export class DoctorsProfileModule {}
