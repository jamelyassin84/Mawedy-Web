import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PatientInfoComponent } from './patient-info/patient-info.component'
import { BookingListComponent } from './booking-list/booking-list.component'
import { UploadModalComponent } from './modals/upload-modal/upload-modal.component'
import { DashboardModule } from '../dashboard/dashboard.module'
import { PatientsToolbarComponent } from '../toolbars/patients/patients.component'
import { AppRoutingModule } from '../app-routing.module'
import { RouterModule } from '@angular/router'
import { PatientsInfoToolbarComponent } from '../toolbars/patients-info-toolbar/patients-info-toolbar.component'

@NgModule({
	declarations: [
		PatientInfoComponent,
		BookingListComponent,
		UploadModalComponent,
		PatientsToolbarComponent,
		PatientsInfoToolbarComponent,
	],
	imports: [CommonModule, DashboardModule, AppRoutingModule, RouterModule],
	exports: [PatientsToolbarComponent, PatientsInfoToolbarComponent],
})
export class PatientsModule {}
