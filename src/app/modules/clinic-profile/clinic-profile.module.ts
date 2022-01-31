import { ModalV2Component } from './../../components/modalv2/modal-v2/modal-v2.component'
import { AddDepartmentModalBodyComponent } from './../../components/modal-components/add-department/add-department-modal-body/add-department-modal-body.component'
import { environment } from 'src/environments/environment'
import { AgmCoreModule } from '@agm/core'
import { IconsModule } from './../icon/icon.module'
import { AddMedicalServicesModalBodyComponent } from './../../components/modal-components/add-medical-services/add-medical-services-modal-body/add-medical-services-modal-body.component'
import { PatientsModule } from './../patients/patients.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ClinicProfileComponent } from './clinic-profile/clinic-profile.component'
import { ClinicProfileServicesComponent } from './clinic-profile-services/clinic-profile-services.component'
import { ClinicServiceCardComponent } from '../../components/utilities/clinic-service-card/clinic-service-card.component'
import { RouterModule } from '@angular/router'
import { ClinicProfileToolbarComponent } from 'src/app/components/toolbars/clinci-profile-toolbar/clinci-profile-toolbar.component'
import { AppRoutingModule } from 'src/app/app-routing.module'
import { DashboardModule } from '../dashboard/dashboard.module'
import { TabsComponent } from 'src/app/components/utilities/tabs/tabs.component'
import { FormsModule } from '@angular/forms'
import { IvyCarouselModule } from 'angular-responsive-carousel'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DropdownSmComponent } from 'src/app/components/dropdowns/dropdown-sm/dropdown-sm.component'
import { DropdownLgComponent } from 'src/app/components/dropdowns/dropdown-lg/dropdown-lg.component'
import { ViewDepartmentsComponent } from 'src/app/components/modal-components/view-departments/view-departments.component'
import { AppointmentsModule } from '../appointments/appointments.module'

@NgModule({
	declarations: [
		ClinicProfileComponent,
		ClinicProfileServicesComponent,
		ClinicProfileToolbarComponent,
		TabsComponent,
		ClinicServiceCardComponent,
		AddMedicalServicesModalBodyComponent,
		AddDepartmentModalBodyComponent,
		DropdownSmComponent,
		DropdownLgComponent,
		ViewDepartmentsComponent,
	],
	imports: [
		CommonModule,
		DashboardModule,
		PatientsModule,
		AppRoutingModule,
		RouterModule,
		IconsModule,
		FormsModule,
		IvyCarouselModule,
		BrowserAnimationsModule,
		AppointmentsModule,
		AgmCoreModule.forRoot({
			apiKey: environment.GOOGLEMAPS,
		}),
	],
	exports: [
		ClinicProfileToolbarComponent,
		TabsComponent,
		ClinicServiceCardComponent,
		AddMedicalServicesModalBodyComponent,
		DropdownSmComponent,
		DropdownLgComponent,
		ViewDepartmentsComponent,
	],
})
export class ClinicProfileModule {}
