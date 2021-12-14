import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ClinicProfileComponent } from './clinic-profile/clinic-profile.component'
import { ClinicProfileServicesComponent } from './clinic-profile-services/clinic-profile-services.component'
import { ClinicServiceCardComponent } from './components/clinic-service-card/clinic-service-card.component'
import { AddMedicalServicesComponent } from './modals/add-medical-services/add-medical-services.component'
import { RouterModule } from '@angular/router'
import { ClinicProfileToolbarComponent } from 'src/app/components/toolbars/clinci-profile-toolbar/clinci-profile-toolbar.component'
import { AppRoutingModule } from 'src/app/app-routing.module'
import { DashboardModule } from '../dashboard/dashboard.module'

@NgModule({
	declarations: [
		ClinicProfileComponent,
		ClinicProfileServicesComponent,
		ClinicServiceCardComponent,
		AddMedicalServicesComponent,
		ClinicProfileToolbarComponent,
	],
	imports: [CommonModule, DashboardModule, AppRoutingModule, RouterModule],
	exports: [ClinicProfileToolbarComponent],
})
export class ClinicProfileModule {}
