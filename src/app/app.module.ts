import { PatientsModule } from './patients/patients.module'
import { AppointmentsModule } from './appointments/appointments.module'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginComponent } from './pages/login/login.component'
import { RegisterComponent } from './pages/register/register.component'
import { HomeComponent } from './pages/home/home.component'
import { LoginNavComponent } from './shared/login-nav/login-nav.component'
import { NavbarComponent } from './shared/home/navbar/navbar.component'
import { SidebarComponent } from './shared/home/sidebar/sidebar.component'
import { ToolbarComponent } from './shared/home/toolbar/toolbar.component'
import { DashboardToolbarComponent } from './toolbars/dashboard-toolbar/dashboard-toolbar.component'
import { AppointmentsToolbarComponent } from './toolbars/appointments-toolbar/appointments-toolbar.component'
import { DoctorsProfileComponent } from './toolbars/doctors-profile/doctors-profile.component'
import { PatientsComponent } from './toolbars/patients/patients.component'
import { ClinciProfileToolbarComponent } from './toolbars/clinci-profile-toolbar/clinci-profile-toolbar.component'
import { PromotionsToolbarComponent } from './toolbars/promotions-toolbar/promotions-toolbar.component'
import { CenterMediumModalComponent } from './modals/center-medium-modal/center-medium-modal.component'
import { CenterLargeModalComponent } from './modals/center-large-modal/center-large-modal.component'
import { RightLargeModalComponent } from './modals/right-large-modal/right-large-modal.component'
import { ConfirmModalComponent } from './modals/confirm-modal/confirm-modal.component'
import { FileUploadModalComponent } from './modals/file-upload-modal/file-upload-modal.component'
import { LoaderModalComponent } from './modals/loader-modal/loader-modal.component'
import { PatientProfileComponent } from './patients/modals/patient-profile/patient-profile.component'
import { ClinicProfileModule } from './clinic-profile/clinic-profile.module'
import { DashboardModule } from './dashboard/dashboard.module'
import { DoctorsProfileModule } from './doctors-profile/doctors-profile.module'
import { PromotionsModule } from './promotions/promotions.module'
import { RightBlurBackgroundModalComponent } from './modals/right-blurr-background-modal/right-blurr-background-modal.component'

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		RegisterComponent,
		HomeComponent,
		LoginNavComponent,
		NavbarComponent,
		SidebarComponent,
		ToolbarComponent,
		DashboardToolbarComponent,
		AppointmentsToolbarComponent,
		DoctorsProfileComponent,
		PatientsComponent,
		ClinciProfileToolbarComponent,
		PromotionsToolbarComponent,
		CenterMediumModalComponent,
		CenterLargeModalComponent,
		RightLargeModalComponent,
		RightBlurBackgroundModalComponent,
		ConfirmModalComponent,
		FileUploadModalComponent,
		LoaderModalComponent,
		PatientProfileComponent,
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
})
export class AppModule {}
