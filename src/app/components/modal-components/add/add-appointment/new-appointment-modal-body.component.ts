import { ClinicService } from 'src/app/services/utilities/clnic.service'
import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { Department, Doctor } from 'src/app/models/types'
import { ROUTES } from 'src/app/routes/api.routes'
import { BaseService } from 'src/app/services/api/base.api.service'
import { AlertService } from 'src/app/services/utilities/alert.service'
import { ModalService } from 'src/app/services/utilities/modal.service'

@Component({
	selector: 'app-new-appointment-modal-body',
	templateUrl: './new-appointment-modal-body.component.html',
	styleUrls: ['./new-appointment-modal-body.component.scss'],
})
export class NewAppointmentModalBodyComponent implements OnInit {
	constructor(
		private http: HttpClient,
		private alert: AlertService,
		private modalService: ModalService,
		private clinic: ClinicService,
	) {}

	ngOnInit(): void {
		this.getDepartments()
	}

	doctors: Doctor[] = []

	departments: Department[] = []

	selectedDoctor: Doctor[] = []

	isProcessing: boolean | 'complete' = false

	doctorKeyword: string = ''

	getDepartments() {
		new BaseService(this.http, `${ROUTES.CLINIC_DEPARTMENT}/clinic`)
			.show(this.clinic.getID())
			.subscribe({
				next: (data: Department[]) => {
					this.departments = data
				},
			})
	}

	selectDoctor() {
		new BaseService(this.http, `${ROUTES.DOCTOR}/search`)
			.create({ keyword: this.doctorKeyword })
			.subscribe({
				next: (doctors: Doctor[]) => {
					this.doctors = doctors
				},
			})
	}

	removeDoctor(index: number) {
		this.selectedDoctor.splice(index, 1)
	}

	onSelectDoctor(doctor: Doctor) {
		if (
			this.selectedDoctor.some(
				(selectedDoctor: Doctor) => doctor.id === selectedDoctor.id,
			)
		) {
			return this.alert.Fire({
				title: `Unable to add doctor.`,
				description: `You already added ${doctor.name}.`,
				type: 'error',
			})
		}

		this.selectedDoctor = []
		this.selectedDoctor.push(doctor)
		this.doctorKeyword = ''
	}

	save() {
		const doctor = this.selectedDoctor[0]
	}

	closeModal() {
		this.modalService.showModal(false)
	}
}
