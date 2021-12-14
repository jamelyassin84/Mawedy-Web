import { PatientsModule } from './../patients/patients.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ClinicProfileComponent } from './clinic-profile/clinic-profile.component'
import { ClinicProfileServicesComponent } from './clinic-profile-services/clinic-profile-services.component'
import { ClinicServiceCardComponent } from '../../components/utilities/clinic-service-card/clinic-service-card.component'
import { AddMedicalServicesComponent } from './modals/add-medical-services/add-medical-services.component'
import { RouterModule } from '@angular/router'
import { ClinicProfileToolbarComponent } from 'src/app/components/toolbars/clinci-profile-toolbar/clinci-profile-toolbar.component'
import { AppRoutingModule } from 'src/app/app-routing.module'
import { DashboardModule } from '../dashboard/dashboard.module'
import { TabsComponent } from 'src/app/components/utilities/tabs/tabs.component'

@NgModule({
	declarations: [
		ClinicProfileComponent,
		ClinicProfileServicesComponent,
		AddMedicalServicesComponent,
		ClinicProfileToolbarComponent,
		TabsComponent,
		ClinicServiceCardComponent,
	],
	imports: [
		CommonModule,
		DashboardModule,
		PatientsModule,
		AppRoutingModule,
		RouterModule,
	],
	exports: [
		ClinicProfileToolbarComponent,
		TabsComponent,
		ClinicServiceCardComponent,
	],
})
export class ClinicProfileModule {}
