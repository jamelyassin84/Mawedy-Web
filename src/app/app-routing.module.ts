import { PromotionsEditComponent } from './modules/app/promotions/promotions-edit/promotions-edit.component'
import { ClinicProfileServicesComponent } from './modules/app/clinic-profile/clinic-profile-services/clinic-profile-services.component'
import { AppointmentsDayComponent } from './modules/app/appointments/appointments-day/appointments-day.component'
import { AppointmentsWeekComponent } from './modules/app/appointments/appointments-week/appointments-week.component'
import { AppointmentsMonthComponent } from './modules/app/appointments/appointments-month/appointments-month.component'
import { LoginComponent } from './pages/login/login.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { AppointmentsComponent } from './modules/app/dashboard/appointments/appointments.component'
import { PatientOutreachComponent } from './modules/app/dashboard/patient-outreach/patient-outreach.component'
import { DoctorsProfileComponent } from './modules/app/doctors-profile/doctors-profile/doctors-profile.component'
import { PatientsComponent } from './modules/app/patients/patients/patients.component'
import { PatientInfoComponent } from './modules/app/patients/patient-info/patient-info.component'
import { ClinicProfileComponent } from './modules/app/clinic-profile/clinic-profile/clinic-profile.component'
import { PromotionsComponent } from './modules/app/promotions/promotions/promotions.component'
import { PromotionsAddComponent } from './modules/app/promotions/promotions-add/promotions-add.component'

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
					{
						path: 'appointments',
						component: AppointmentsComponent,
					},
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
					{
						path: 'month',
						component: AppointmentsMonthComponent,
					},
					{
						path: 'week',
						component: AppointmentsWeekComponent,
					},
					{
						path: 'day',
						component: AppointmentsDayComponent,
					},
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
					{
						path: 'information',
						component: ClinicProfileComponent,
					},
					{
						path: 'services',
						component: ClinicProfileServicesComponent,
					},
				],
			},
			{
				path: 'promotions',
				children: [
					{
						path: '',
						pathMatch: 'full',
						redirectTo: 'list',
					},
					{
						path: 'list',
						component: PromotionsComponent,
					},
					{
						path: 'add',
						component: PromotionsAddComponent,
					},
					{
						path: ':id',
						component: PromotionsEditComponent,
					},
				],
			},
		],
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
