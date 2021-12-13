import { LoginComponent } from './pages/login/login.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { AppointmentsComponent } from './dashboard/appointments/appointments.component'
import { PatientOutreachComponent } from './dashboard/patient-outreach/patient-outreach.component'

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
		],
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
