import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { listAnimation } from 'src/app/animations/List.animation'
import {
	resolveAddress,
	resolveAge,
	resolveName,
} from 'src/app/core/constants/App.functions'
import { Patient } from 'src/app/models/types'
import { ROUTES } from 'src/app/routes/api.routes'
import { BaseService } from 'src/app/services/api/base.api.service'
import { ClinicService } from 'src/app/services/utilities/clnic.service'

@Component({
	selector: 'patients',
	templateUrl: './patients.component.html',
	styleUrls: ['./patients.component.scss'],
	animations: [listAnimation],
})
export class PatientsComponent implements OnInit {
	constructor(private http: HttpClient) {}

	ngOnInit(): void {
		this.getPatients()
	}

	patients!: Patient[]

	getPatients() {
		new BaseService(this.http, ROUTES.PATIENTS).index().subscribe({
			next: (patients: Patient[]) => {
				this.patients = patients
			},
			error: (error) => console.log(error),
		})
	}

	resolveName(patient: Patient) {
		return resolveName(patient, 'normal')
	}

	resolveAddress(patient: Patient) {
		return resolveAddress(patient)
	}

	resolveAge(patient: Patient) {
		return resolveAge(patient.dob)
	}
}
