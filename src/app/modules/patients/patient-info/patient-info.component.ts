import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { ActivatedRoute } from '@angular/router'
import { resolveAge, resolveName } from 'src/app/constants/App.functions'
import { Patient } from 'src/app/models/types'
import { ROUTES } from 'src/app/routes/api.routes'
import { BaseService } from 'src/app/services/api/base.api.service'

@Component({
	selector: 'patients-patient-info',
	templateUrl: './patient-info.component.html',
	styleUrls: ['./patient-info.component.scss'],
})
export class PatientInfoComponent implements OnInit {
	constructor(
		private route: ActivatedRoute,
		private title: Title,
		private http: HttpClient,
	) {}

	ngOnInit(): void {
		this.getPatient(this.route.snapshot.paramMap.get('id'))
	}

	patient!: Patient

	getPatient(id: any): void {
		new BaseService(this.http, ROUTES.PATIENTS).show(id).subscribe({
			next: (patient: Patient) => {
				this.patient = patient
				this.title.setTitle(`Mawedy | ${resolveName(patient, 'normal')} Records`)
			},
			error: (error) => console.log(error),
		})
	}

	resolveName(patient: Patient): string {
		return resolveName(patient, 'normal')
	}

	resolveAge(dob: string) {
		return resolveAge(dob)
	}
}
