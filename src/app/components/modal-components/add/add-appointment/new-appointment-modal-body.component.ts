import { listAnimation } from './../../../../animations/List.animation'
import { Patient } from './../../../../models/types'
import { ClinicService } from 'src/app/services/utilities/clnic.service'
import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { Department, Doctor } from 'src/app/models/types'
import { ROUTES } from 'src/app/routes/api.routes'
import { BaseService } from 'src/app/services/api/base.api.service'
import { AlertService } from 'src/app/services/utilities/alert.service'
import { ModalService } from 'src/app/services/utilities/modal.service'
import { resolveAge, resolveName } from 'src/app/constants/App.functions'

@Component({
	selector: 'app-new-appointment-modal-body',
	templateUrl: './new-appointment-modal-body.component.html',
	styleUrls: ['./new-appointment-modal-body.component.scss'],
	animations: [listAnimation],
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

	selectedDoctor: Doctor[] = []

	patients: Patient[] = []

	selectedPatient: Patient[] = []

	departments: Department[] = []

	isProcessing: boolean | 'complete' = false

	doctorKeyword: string = ''

	patientKeyword: string = ''

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
		this.selectedDoctor = []
		this.selectedDoctor.push(doctor)
		this.doctorKeyword = ''
	}

	selectPatient() {
		new BaseService(this.http, `${ROUTES.PATIENTS}/search`)
			.create({ keyword: this.patientKeyword })
			.subscribe({
				next: (patients: Patient[]) => {
					this.patients = patients
				},
			})
	}

	removePatient(index: number) {
		this.selectedPatient.splice(index, 1)
	}

	onSelectPatient(patient: Patient) {
		this.selectedDoctor = []
		this.selectedPatient.push(patient)
		this.doctorKeyword = ''
	}

	resolveName(patient: Patient): string {
		return resolveName(patient, 'normal')
	}

	resolveAge(patient: Patient): number {
		return resolveAge(patient.dob)
	}

	save() {
		const doctor = this.selectedDoctor[0]
		const patient = this.selectedPatient[0]
	}

	closeModal() {
		this.modalService.showModal(false)
	}
}
