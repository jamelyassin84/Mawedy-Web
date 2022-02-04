import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { listAnimation } from 'src/app/animations/List.animation'
import { resolveName } from 'src/app/constants/App.functions'
import { Appointment, Patient } from 'src/app/models/types'
import { ROUTES } from 'src/app/routes/api.routes'
import { BaseService } from 'src/app/services/api/base.api.service'
import { ClinicService } from 'src/app/services/utilities/clnic.service'

@Component({
	selector: 'dashboard-appointments',
	templateUrl: './appointments.component.html',
	styleUrls: ['./appointments.component.scss'],
	animations: [listAnimation],
})
export class AppointmentsComponent implements OnInit {
	constructor(private http: HttpClient, private clinic: ClinicService) {}

	ngOnInit(): void {
		this.getAppointmentsToday()
	}

	appointments: Appointment[] = []

	getAppointmentsToday() {
		new BaseService(
			this.http,
			`${ROUTES.CLINIC_APPOINTMENTS}?clinic=${this.clinic.getID()}`,
		)
			.index()
			.subscribe({
				next: (appointments: Appointment[]) => {
					this.appointments = appointments
				},
			})
	}

	resolveName(patient: Patient): string {
		return resolveName(patient, 'normal')
	}
}
