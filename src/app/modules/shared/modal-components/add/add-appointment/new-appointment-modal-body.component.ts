import { ROUTES } from '../../../../../routes/api.routes'
import { listAnimation } from '../../../../../animations/List.animation'
import { ClinicMedicalService, Patient } from '../../../../../models/types'
import { ClinicService } from 'src/app/services/utilities/clnic.service'
import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { Department, Doctor } from 'src/app/models/types'
import { BaseService } from 'src/app/services/api/base.api.service'
import { AlertService } from 'src/app/services/utilities/alert.service'
import { ModalService } from 'src/app/services/utilities/modal.service'
import { resolveAge, resolveName } from 'src/app/core/constants/App.functions'

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

	patients: Patient[] = []

	medicalServices: ClinicMedicalService[] = []

	departments: Department[] = []

	selectedPatient: Patient[] = []

	selectedDepartment!: number

	selectedDoctor: Doctor[] = []

	selectedMedicalServices: ClinicMedicalService[] = []

	appointMentDate!: string | any

	appointMentTime!: string | any

	notes: string | null = null

	isProcessing: boolean | 'complete' = false

	doctorKeyword: string = ''

	patientKeyword: string = ''

	medicalServiceKeyword: string = ''

	getDepartments() {
		new BaseService(this.http, `${ROUTES.CLINIC_DEPARTMENT}/clinic`)
			.show(this.clinic.getID())
			.subscribe({
				next: (data: Department[]) => {
					this.departments = data
					this.selectedDepartment = data[0].id as number
				},
			})
	}

	selectDepartment(event: any) {
		this.selectedDepartment = event.target.value as number
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

	selectMedicalService() {
		new BaseService(
			this.http,
			`${ROUTES.CLINIC_MEDICAL_SERVICES}/search`,
		)
			.create({
				keyword: this.medicalServiceKeyword,
				department: this.selectedDepartment,
			})
			.subscribe({
				next: (medicalServices: ClinicMedicalService[]) => {
					this.medicalServices = medicalServices
				},
			})
	}

	removeMedicalService(index: number) {
		this.selectedMedicalServices.splice(index, 1)
	}

	onSelectMedicalService(medicalService: ClinicMedicalService) {
		this.selectedMedicalServices = []
		this.selectedMedicalServices.push(medicalService)
		this.medicalServiceKeyword = ''
	}

	selectDoctor() {
		new BaseService(this.http, `${ROUTES.DOCTOR}/search`)
			.create({
				keyword: this.doctorKeyword,
			})
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

	save() {
		const doctor: Doctor = this.selectedDoctor[0]

		const patient: Patient = this.selectedPatient[0]

		const service: ClinicMedicalService =
			this.selectedMedicalServices[0]

		this.isProcessing = true

		new BaseService(this.http, ROUTES.CLINIC_APPOINTMENTS)
			.create({
				appointment_type: 'walk-in',
				bookedThrough: 'walk-in',
				date: this.appointMentDate,
				time: this.appointMentTime,
				clinic: this.clinic.getID(),
				patient: patient,
				doctor: doctor,
				service: service,
				clinicPromotion: null,
			})
			.subscribe({
				next: () => {
					this.appointMentDate = ''

					this.appointMentTime = ''

					this.selectedDoctor = []

					this.selectedPatient = []

					this.selectMedicalService = {} as any

					this.doctorKeyword = ''

					this.medicalServiceKeyword = ''

					this.patientKeyword = ''

					this.selectDoctor()

					this.selectPatient()

					this.selectMedicalService()

					this.alert.Fire({
						title: `New Appointment Added!`,
						description: `You have successfully scheduled ${this.resolveName(
							patient,
						)} to Dr. ${doctor.name} on ${
							this.appointMentDate
						} - ${this.appointMentTime}.`,
						type: 'success',
					})

					this.isProcessing = 'complete'

					this.isProcessing = true
				},
				error: () => {
					this.isProcessing = false
				},
			})
	}

	closeModal() {
		this.modalService.showModal(false)
	}
}
