import { NgModule } from '@angular/core'
import { HTTP_INTERCEPTORS } from '@angular/common/http'

//Shared Modules
import { ClinicProfileModule } from './modules/app/clinic-profile/clinic-profile.module'
import { DoctorsProfileModule } from './modules/app/doctors-profile/doctors-profile.module'
import { PatientsModule } from './modules/app/patients/patients.module'
import { PromotionsModule } from './modules/app/promotions/promotions.module'
import { DashboardModule } from './modules/app/dashboard/dashboard.module'
import { AppointmentsModule } from './modules/app/appointments/appointments.module'
import { SharedModule } from './modules/shared/shared.module'

//App Components
import { AppComponent } from './app.component'
import { LoginComponent } from './pages/login/login.component'
import { RegisterComponent } from './pages/register/register.component'
import { HomeComponent } from './pages/home/home.component'
import { LoginNavComponent } from './shared/login-nav/login-nav.component'
import { NavbarComponent } from './shared/home/navbar/navbar.component'
import { SidebarComponent } from './shared/home/sidebar/sidebar.component'

import { MainInterceptor } from './core/interceptors/main'
import { LoginSection1Component } from './pages/login/login-section1/login-section1.component'
import { LoginSection2Component } from './pages/login/login-section2/login-section2.component'
import { LoginSection3Component } from './pages/login/login-section3/login-section3.component'
import { LoginSection4Component } from './pages/login/login-section4/login-section4.component'
import { LoginFooterComponent } from './pages/login/login-footer/login-footer.component'
import { PageNotFoundComponent } from './pages/redirects/page-not-found/page-not-found.component'
import { UnderMaintenanceComponent } from './pages/redirects/under-maintenance/under-maintenance.component'
import { InternalServerErrorComponent } from './pages/redirects/internal-server-error/internal-server-error.component'
import { NoInternetComponent } from './pages/redirects/no-internet/no-internet.component'
import { DoctorBadgesComponent } from './modules/shared/doctor-profile/doctor-badges/doctor-badges.component'

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		RegisterComponent,
		HomeComponent,
		LoginNavComponent,
		NavbarComponent,
		SidebarComponent,
		LoginSection1Component,
		LoginSection2Component,
		LoginSection3Component,
		LoginSection4Component,
		LoginFooterComponent,
		PageNotFoundComponent,
		UnderMaintenanceComponent,
		InternalServerErrorComponent,
		NoInternetComponent,
		DoctorBadgesComponent,
	],
	imports: [
		//Shared Modules
		AppointmentsModule,
		ClinicProfileModule,
		DashboardModule,
		DoctorsProfileModule,
		PatientsModule,
		PromotionsModule,
		SharedModule,
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
