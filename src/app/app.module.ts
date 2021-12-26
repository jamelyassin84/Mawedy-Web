import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module'

import { ClinicProfileModule } from './modules/clinic-profile/clinic-profile.module'
import { DoctorsProfileModule } from './modules/doctors-profile/doctors-profile.module'
import { PatientsModule } from './modules/patients/patients.module'
import { PromotionsModule } from './modules/promotions/promotions.module'
import { AppointmentsModule } from './modules/appointments/appointments.module'

import { AppComponent } from './app.component'
import { LoginComponent } from './pages/login/login.component'
import { RegisterComponent } from './pages/register/register.component'
import { HomeComponent } from './pages/home/home.component'
import { LoginNavComponent } from './shared/login-nav/login-nav.component'
import { NavbarComponent } from './shared/home/navbar/navbar.component'
import { SidebarComponent } from './shared/home/sidebar/sidebar.component'
import { DashboardModule } from './modules/dashboard/dashboard.module'
import { PatientsComponent } from './modules/patients/patients/patients.component'
import { PatientProfileComponent } from './modules/patients/modals/patient-profile/patient-profile.component'
import { LoaderModalComponent } from './components/modals/loader-modal/loader-modal.component'
import { FileUploadModalComponent } from './components/modals/file-upload-modal/file-upload-modal.component'
import { ConfirmModalComponent } from './components/modals/confirm-modal/confirm-modal.component'
import { RightBlurBackgroundModalComponent } from './components/modals/right-blurr-background-modal/right-blurr-background-modal.component'
import { RightLargeModalComponent } from './components/modals/right-large-modal/right-large-modal.component'
import { CenterLargeModalComponent } from './components/modals/center-large-modal/center-large-modal.component'
import { CenterMediumModalComponent } from './components/modals/center-medium-modal/center-medium-modal.component'
import { MainModalComponent } from './components/modals/main-modal/main-modal.component'

import { NewAppointmentModalBodyComponent } from './components/modal-components/new-appoitment-modal/new-appoitment-modal-body/new-appointment-modal-body.component'
import { NewAppointmentModalFooterComponent } from './components/modal-components/new-appoitment-modal/new-appoitnment-modal-footer/new-appointment-modal-footer.component'
import { NewAppointmentModalHeaderComponent } from './components/modal-components/new-appoitment-modal/new-appointment-modal-header/new-appointment-modal-header.component'

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		RegisterComponent,
		HomeComponent,
		LoginNavComponent,
		NavbarComponent,
		SidebarComponent,
		PatientsComponent,
		CenterMediumModalComponent,
		CenterLargeModalComponent,
		RightLargeModalComponent,
		RightBlurBackgroundModalComponent,
		ConfirmModalComponent,
		FileUploadModalComponent,
		LoaderModalComponent,
		PatientProfileComponent,
		MainModalComponent,
		NewAppointmentModalBodyComponent,
		NewAppointmentModalFooterComponent,
		NewAppointmentModalHeaderComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		RouterModule,
		AppointmentsModule,
		ClinicProfileModule,
		DashboardModule,
		DoctorsProfileModule,
		PatientsModule,
		PromotionsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
	exports: [],
})
export class AppModule {}
