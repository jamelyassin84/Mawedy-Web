import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DoctorsProfileComponent } from './doctors-profile/doctors-profile.component'
import { AvailabilityComponent } from './modals/availability/availability.component'
import { DoctorProfileModalComponent } from './modals/doctor-profile-modal/doctor-profile-modal.component'
import { DashboardModule } from '../dashboard/dashboard.module'
import { DoctorsProfileToolbarComponent } from '../toolbars/doctors-profile/doctors-profile.component'

@NgModule({
	declarations: [
		DoctorsProfileComponent,
		AvailabilityComponent,
		DoctorProfileModalComponent,
		DoctorsProfileComponent,
		DoctorsProfileToolbarComponent,
	],
	imports: [CommonModule, DashboardModule],
	exports: [DoctorsProfileToolbarComponent],
})
export class DoctorsProfileModule {}
