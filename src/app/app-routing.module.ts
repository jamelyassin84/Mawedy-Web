import { AppointmentsDayComponent } from './appointments/appointments-day/appointments-day.component'
import { AppointmentsWeekComponent } from './appointments/appointments-week/appointments-week.component'
import { AppointmentsMonthComponent } from './appointments/appointments-month/appointments-month.component'
import { LoginComponent } from './pages/login/login.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { AppointmentsComponent } from './dashboard/appointments/appointments.component'
import { PatientOutreachComponent } from './dashboard/patient-outreach/patient-outreach.component'
import { PatientsComponent } from './patients/patients/patients.component'
import { ClinicProfileComponent } from './clinic-profile/clinic-profile/clinic-profile.component'
import { PromotionsComponent } from './promotions/promotions/promotions.component'
import { DoctorsProfileComponent } from './doctors-profile/doctors-profile/doctors-profile.component'
import { PatientInfoComponent } from './patients/patient-info/patient-info.component'

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
				component: ClinicProfileComponent,
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
