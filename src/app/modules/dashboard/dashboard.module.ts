import { NgModule } from '@angular/core'
import { AppointmentsComponent } from './appointments/appointments.component'
import { PatientOutreachComponent } from './patient-outreach/patient-outreach.component'
import { SharedModule } from '../shared/shared.module'
import { CommonModule } from '@angular/common'
@NgModule({
	declarations: [AppointmentsComponent, PatientOutreachComponent],
	imports: [SharedModule, CommonModule],
	exports: [],
})
export class DashboardModule {}
