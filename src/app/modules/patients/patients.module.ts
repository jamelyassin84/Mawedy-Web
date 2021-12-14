import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PatientInfoComponent } from './patient-info/patient-info.component'
import { BookingListComponent } from './booking-list/booking-list.component'
import { UploadModalComponent } from './modals/upload-modal/upload-modal.component'
import { RouterModule } from '@angular/router'
import { PatientsToolbarComponent } from 'src/app/components/toolbars/patients/patients.component'
import { PatientsInfoToolbarComponent } from 'src/app/components/toolbars/patients-info-toolbar/patients-info-toolbar.component'
import { DashboardModule } from '../dashboard/dashboard.module'
import { AppRoutingModule } from 'src/app/app-routing.module'
import { CheckboxComponent } from 'src/app/components/utilities/checkbox/checkbox.component'

@NgModule({
	declarations: [
		PatientInfoComponent,
		BookingListComponent,
		UploadModalComponent,
		PatientsToolbarComponent,
		PatientsInfoToolbarComponent,
		CheckboxComponent,
	],
	imports: [CommonModule, DashboardModule, AppRoutingModule, RouterModule],
	exports: [
		PatientsToolbarComponent,
		PatientsInfoToolbarComponent,
		CheckboxComponent,
	],
})
export class PatientsModule {}
