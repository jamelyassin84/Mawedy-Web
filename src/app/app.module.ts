//Angular Modules
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

//ThirdParty Modules
import { IconsModule } from './modules/icon/icon.module'
import { IvyCarouselModule } from 'angular-responsive-carousel'
import { StoreModule } from '@ngrx/store'

//Shared Modules
import { ClinicProfileModule } from './modules/clinic-profile/clinic-profile.module'
import { DoctorsProfileModule } from './modules/doctors-profile/doctors-profile.module'
import { PatientsModule } from './modules/patients/patients.module'
import { PromotionsModule } from './modules/promotions/promotions.module'
import { DashboardModule } from './modules/dashboard/dashboard.module'
import { AppointmentsModule } from './modules/appointments/appointments.module'

// Reducers
import { modalReducer } from './actions/modal/modal.reducer'

//Directives
//Pipes
//Shared Components
import { AppComponent } from './app.component'
import { LoginComponent } from './pages/login/login.component'
import { RegisterComponent } from './pages/register/register.component'
import { HomeComponent } from './pages/home/home.component'
import { LoginNavComponent } from './shared/login-nav/login-nav.component'
import { NavbarComponent } from './shared/home/navbar/navbar.component'
import { SidebarComponent } from './shared/home/sidebar/sidebar.component'
import { PatientsComponent } from './modules/patients/patients/patients.component'
import { LoaderModalComponent } from './components/modals/loader-modal/loader-modal.component'
import { FileUploadModalComponent } from './components/modals/file-upload-modal/file-upload-modal.component'
import { ConfirmModalComponent } from './components/modals/confirm-modal/confirm-modal.component'
import { RightLargeModalComponent } from './components/modals/right-large-modal/right-large-modal.component'
import { CenterLargeModalComponent } from './components/modals/center-large-modal/center-large-modal.component'
import { CenterMediumModalComponent } from './components/modals/center-medium-modal/center-medium-modal.component'
import { NewAppointmentModalBodyComponent } from './components/modal-components/add/add-appointment/new-appointment-modal-body.component'
import { CenterSmallModalComponent } from './components/modals/center-small-modal/center-small-modal.component'
import { MainModalComponent } from './components/modals/_main-modal/main-modal.component'
import { MainInterceptor } from './interceptors/main'
import { LoginSection1Component } from './pages/login/login-section1/login-section1.component'
import { LoginSection2Component } from './pages/login/login-section2/login-section2.component'
import { LoginSection3Component } from './pages/login/login-section3/login-section3.component'
import { LoginSection4Component } from './pages/login/login-section4/login-section4.component'
import { LoginFooterComponent } from './pages/login/login-footer/login-footer.component'
import { PageNotFoundComponent } from './pages/redirects/page-not-found/page-not-found.component'
import { UnderMaintenanceComponent } from './pages/redirects/under-maintenance/under-maintenance.component'
import { InternalServerErrorComponent } from './pages/redirects/internal-server-error/internal-server-error.component'
import { NoInternetComponent } from './pages/redirects/no-internet/no-internet.component'
import { WhosAccountComponent } from './components/modals/whos-account/whos-account.component'
import { DoctorBadgesComponent } from './components/utilities/doctor-profile/doctor-badges/doctor-badges.component'
import { AlertComponent } from './components/utilities/common/alert/alert.component'
import { ServiceWorkerModule } from '@angular/service-worker'
import { environment } from '../environments/environment'

@NgModule({
	declarations: [
		AppComponent,
		AlertComponent,
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
		ConfirmModalComponent,
		FileUploadModalComponent,
		LoaderModalComponent,
		MainModalComponent,
		NewAppointmentModalBodyComponent,
		CenterSmallModalComponent,
		LoginSection1Component,
		LoginSection2Component,
		LoginSection3Component,
		LoginSection4Component,
		LoginFooterComponent,
		PageNotFoundComponent,
		UnderMaintenanceComponent,
		InternalServerErrorComponent,
		NoInternetComponent,
		WhosAccountComponent,
		DoctorBadgesComponent,
	],
	imports: [
		//Angular Modules
		BrowserModule,
		AppRoutingModule,
		RouterModule,
		BrowserAnimationsModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,

		//Third Modules
		IvyCarouselModule,
		IconsModule,

		//Shared Modules
		AppointmentsModule,
		ClinicProfileModule,
		DashboardModule,
		DoctorsProfileModule,
		PatientsModule,
		PromotionsModule,

		// Modules with config
		StoreModule.forRoot(modalReducer),
		ServiceWorkerModule.register('ngsw-worker.js', {
			enabled: environment.production,
			registrationStrategy: 'registerWhenStable:30000',
		}),
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: MainInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
	exports: [],
})
export class AppModule {}
