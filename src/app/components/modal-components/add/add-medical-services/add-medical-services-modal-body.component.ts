import { Doctor } from './../../../../models/types'
import { listAnimation } from '../../../../animations/List.animation'
import { Component, Input, OnInit } from '@angular/core'
import { Department } from 'src/app/models/types'
import { BaseService } from 'src/app/services/api/base.api.service'
import { ROUTES } from 'src/app/routes/api.routes'
import { HttpClient } from '@angular/common/http'

@Component({
	selector: 'add-medical-services-modal-body',
	templateUrl: './add-medical-services-modal-body.component.html',
	styleUrls: ['./add-medical-services-modal-body.component.scss'],
	animations: [listAnimation],
})
export class AddMedicalServicesModalBodyComponent implements OnInit {
	constructor(private http: HttpClient) {}

	ngOnInit(): void {}

	files!: File[]

	keyword: string = ''

	@Input() department!: Department

	doctors: Doctor[] = []
	selectedDoctor: Doctor[] = []

	selectDoctor() {
		new BaseService(this.http, `${ROUTES.DOCTOR}/search`)
			.create({ keyword: this.keyword })
			.subscribe({
				next: (doctors: Doctor[]) => {
					this.doctors = doctors
				},
			})
	}

	onSelectDoctor(doctor: Doctor) {
		this.selectedDoctor.push(doctor)
	}

	trigger(id: string): void {
		document.getElementById(id)?.click()
	}

	readFiles(event: any): void {
		this.files = event.target.files as File[]
	}
}
