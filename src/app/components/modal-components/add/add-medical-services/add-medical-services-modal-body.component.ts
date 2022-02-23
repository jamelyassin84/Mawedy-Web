import { ClinicMedicalService, Doctor } from './../../../../models/types'
import { listAnimation } from '../../../../animations/List.animation'
import { Component, Input, OnInit } from '@angular/core'
import { Department } from 'src/app/models/types'
import { BaseService } from 'src/app/services/api/base.api.service'
import { ROUTES } from 'src/app/routes/api.routes'
import { HttpClient } from '@angular/common/http'
import { AlertService } from 'src/app/services/utilities/alert.service'
import { ModalService } from 'src/app/services/utilities/modal.service'
import { ClinicService } from 'src/app/services/utilities/clnic.service'

@Component({
	selector: 'add-medical-services-modal-body',
	templateUrl: './add-medical-services-modal-body.component.html',
	styleUrls: ['./add-medical-services-modal-body.component.scss'],
	animations: [listAnimation],
})
export class AddMedicalServicesModalBodyComponent implements OnInit {
	constructor(
		private http: HttpClient,
		private alert: AlertService,
		private modalService: ModalService,
		private clinicService: ClinicService,
	) {}

	ngOnInit(): void {}

	photos: any = []

	keyword: string = ''

	name: string = ''

	description: string = ''

	@Input() department!: Department

	doctors: Doctor[] = []

	selectedDoctor: Doctor[] = []

	isProcessing: boolean | 'complete' = false

	trigger(id: string): void {
		let element: HTMLElement = document.querySelector(
			'input[type="file"]',
		) as HTMLElement
		element.click()
	}

	file!: File | any

	src: any = undefined

	readFileURL(event: any): void {
		this.file = event.target.files[0] as File

		const reader = new FileReader()

		reader.readAsDataURL(this.file)

		reader.onload = (e: any) => {
			this.src = reader.result
		}
	}

	selectDoctor() {
		new BaseService(this.http, `${ROUTES.DOCTOR}/search`)
			.create({ keyword: this.keyword })
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

		this.selectedDoctor.push(doctor)
		this.keyword = ''
	}

	save() {
		if (this.file === undefined) {
			return this.alert.Fire({
				title: `No  Medical Service Photo.`,
				description: `Please add medical service photo.`,
				type: 'error',
			})
		}
		if (this.name === '') {
			return this.alert.Fire({
				title: `Field should not be empty`,
				description: `New Medical Service Name is required.`,
				type: 'error',
			})
		}
		if (this.description === '') {
			return this.alert.Fire({
				title: `Field should not be empty`,
				description: `Description for Medical Service  is required.`,
				type: 'error',
			})
		}
		if (this.selectedDoctor.length === 0) {
			return this.alert.Fire({
				title: `No Doctors Found`,
				description: `Please add at least 1 doctor to continue.`,
				type: 'error',
			})
		}

		new BaseService(this.http, ROUTES.CLINIC_MEDICAL_SERVICES)
			.create({
				name: this.name,
				description: this.description,
				isActive: true,
				department: this.department.id,
				clinic: this.clinicService.getID(),
				doctors: this.selectedDoctor,
			})
			.subscribe({
				next: (medicalService: ClinicMedicalService) => {
					this.name = ''

					this.description = ''

					this.isProcessing = 'complete'

					this.saveFiles(medicalService)

					this.selectedDoctor = []

					this.keyword = ''

					this.selectDoctor()

					this.photos = []

					this.alert.Fire({
						title: `Medical Service Added`,
						description: `Doctor has been successfully added`,
						type: 'success',
					})
				},
				error: () => {
					this.isProcessing = false
				},
			})
	}

	saveFiles(medicalService: ClinicMedicalService) {
		if (this.file === undefined) {
			return
		}

		let form = new FormData()

		form.append('photos', this.file, this.file.name)

		form.append('clinicMedicalServiceId', medicalService.id + '')

		new BaseService(
			this.http,
			`${ROUTES.CLINIC_MEDICAL_SERVICES_IMAGES}/upload`,
		)
			.create(form)
			.subscribe({
				complete: () => {
					this.alert.Fire({
						title: `Banners Uploaded`,
						description: `Banners has been updated`,
						type: 'success',
					})

					this.file = undefined
				},
			})
	}

	closeModal() {
		this.modalService.showModal(false)
	}
}
