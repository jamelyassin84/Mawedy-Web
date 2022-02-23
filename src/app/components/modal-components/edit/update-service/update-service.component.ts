import { HttpClient } from '@angular/common/http'
import { Component, Input, OnInit } from '@angular/core'
import { Fire } from 'src/app/constants/Alert'
import { ClinicMedicalService, Department, Doctor } from 'src/app/models/types'
import { ROUTES } from 'src/app/routes/api.routes'
import { BaseService } from 'src/app/services/api/base.api.service'
import { AlertService } from 'src/app/services/utilities/alert.service'
import { ClinicAccountService } from 'src/app/services/utilities/clinic-account.service'
import { ClinicService } from 'src/app/services/utilities/clnic.service'

@Component({
	selector: 'UpdateService',
	templateUrl: './update-service.component.html',
	styleUrls: ['./update-service.component.scss'],
})
export class UpdateServiceComponent implements OnInit {
	constructor(
		private alert: AlertService,
		private http: HttpClient,
		private clinicService: ClinicService,
	) {}

	ngOnInit(): void {
		this.getDoctors()
	}

	@Input() service!: ClinicMedicalService

	@Input() department!: Department

	file!: File | any

	src: any = undefined

	doctors: Doctor[] = []

	selectedDoctor: Doctor[] = []

	keyword: string = ''

	isProcessing: boolean | 'complete' = false

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

	getDoctors() {
		new BaseService(this.http, ROUTES.CLINIC_MEDICAL_SERVICES_DOCTORS)
			.show(this.service.id)
			.subscribe({
				next: (data: any) => {
					let doctors: any = []

					data.forEach((element: any) => {
						doctors.push(element.doctor)
					})

					this.selectedDoctor = doctors
				},
			})
	}

	save() {
		new BaseService(this.http, ROUTES.CLINIC_MEDICAL_SERVICES)
			.update(this.service.id, {
				...this.service,
				selectedDoctor: this.selectedDoctor,
				clinic: this.clinicService.getID(),
				department: this.department.id,
			})
			.subscribe({
				next: () => {
					this.ngOnInit()
					this.alert.Fire({
						title: `Medical Service Updated`,
						description: `Doctor has been successfully added`,
						type: 'success',
					})
				},
				error: () => {
					this.isProcessing = false
				},
			})
	}

	removeService() {
		Fire(
			`Remove ${this.service.name}?`,
			'Are you sure you want to remove the service?',
			'question',
			() => {
				new BaseService(this.http, ROUTES.CLINIC_MEDICAL_SERVICES)
					.destroy(this.service.id)
					.subscribe({
						next: () => {
							this.alert.Fire({
								title: 'Removed',
								description: `${this.service.name} has been removed`,
								type: 'info',
							})
						},
					})
			},
		)
	}
}
