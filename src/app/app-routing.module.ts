import { ClinicProfileServicesComponent } from './modules/clinic-profile/clinic-profile-services/clinic-profile-services.component'
import { AppointmentsDayComponent } from './modules/appointments/appointments-day/appointments-day.component'
import { AppointmentsWeekComponent } from './modules/appointments/appointments-week/appointments-week.component'
import { AppointmentsMonthComponent } from './modules/appointments/appointments-month/appointments-month.component'
import { LoginComponent } from './pages/login/login.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { AppointmentsComponent } from './modules/dashboard/appointments/appointments.component'
import { PatientOutreachComponent } from './modules/dashboard/patient-outreach/patient-outreach.component'
import { DoctorsProfileComponent } from './modules/doctors-profile/doctors-profile/doctors-profile.component'
import { PatientsComponent } from './modules/patients/patients/patients.component'
import { PatientInfoComponent } from './modules/patients/patient-info/patient-info.component'
import { ClinicProfileComponent } from './modules/clinic-profile/clinic-profile/clinic-profile.component'
import { PromotionsComponent } from './modules/promotions/promotions/promotions.component'
import { hasEdited } from './services/utilities/user.service'

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'login',
	},
	{
		path: 'login',
		component: LoginComponent,
	},
	{
		path: 'home',
		component: HomeComponent,
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'dashboard',
			},
			{
				path: 'dashboard',
				children: [
					{
						path: '',
						pathMatch: 'full',
						redirectTo: 'appointments',
					},
					{ path: 'appointments', component: AppointmentsComponent },
					{
						path: 'patient-outreach',
						component: PatientOutreachComponent,
					},
				],
			},
			{
				path: 'appointments',
				children: [
					{
						path: '',
						pathMatch: 'full',
						redirectTo: 'month',
					},
					{ path: 'month', component: AppointmentsMonthComponent },
					{ path: 'week', component: AppointmentsWeekComponent },
					{ path: 'day', component: AppointmentsDayComponent },
				],
			},
			{
				path: 'doctor-profile',
				component: DoctorsProfileComponent,
			},
			{
				path: 'patients',
				children: [
					{
						path: '',
						pathMatch: 'full',
						redirectTo: 'list',
					},
					{ path: 'list', component: PatientsComponent },
					{
						path: 'information/:id',
						component: PatientInfoComponent,
					},
				],
			},
			{
				path: 'clinic-profile',
				children: [
					{
						path: '',
						pathMatch: 'full',
						redirectTo: 'information',
					},
					{ path: 'information', component: ClinicProfileComponent },
					{
						path: 'services',
						component: ClinicProfileServicesComponent,
					},
				],
			},
			{
				path: 'promotions',
				component: PromotionsComponent,
			},
		],
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
