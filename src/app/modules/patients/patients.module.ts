import { NgModule } from '@angular/core'
import { PatientInfoComponent } from './patient-info/patient-info.component'
import { BookingListComponent } from './booking-list/booking-list.component'
import { SharedModule } from '../shared/shared.module'
import { PatientsComponent } from './patients/patients.component'
@NgModule({
	declarations: [
		PatientInfoComponent,
		BookingListComponent,
		PatientsComponent,
	],
	imports: [SharedModule],
	exports: [],
})
export class PatientsModule {}
