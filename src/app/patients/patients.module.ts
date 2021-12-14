import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PatientInfoComponent } from './patient-info/patient-info.component'
import { BookingListComponent } from './booking-list/booking-list.component'
import { UploadModalComponent } from './modals/upload-modal/upload-modal.component'
import { DashboardModule } from '../dashboard/dashboard.module'
import { PatientsToolbarComponent } from '../toolbars/patients/patients.component'
import { AppRoutingModule } from '../app-routing.module'
import { RouterModule } from '@angular/router'

@NgModule({
	declarations: [
		PatientInfoComponent,
		BookingListComponent,
		UploadModalComponent,
		PatientsToolbarComponent,
	],
	imports: [CommonModule, DashboardModule, AppRoutingModule, RouterModule],
	exports: [PatientsToolbarComponent],
})
export class PatientsModule {}
