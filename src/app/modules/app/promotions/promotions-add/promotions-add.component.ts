import { ClinicService } from './../../../../services/utilities/clnic.service'
import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { ClinicPromotion, Doctor } from 'src/app/models/types'
import { ROUTES } from 'src/app/routes/api.routes'
import { BaseService } from 'src/app/services/api/base.api.service'
import { AlertService } from 'src/app/services/utilities/alert.service'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
	selector: 'app-promotions-add',
	templateUrl: './promotions-add.component.html',
	styleUrls: ['./promotions-add.component.scss'],
})
export class PromotionsAddComponent implements OnInit {
	constructor(
		private http: HttpClient,
		private alert: AlertService,
		private clinicService: ClinicService,
	) {}
	ngOnInit(): void {}

	clinicName = this.clinicService.getName()

	doctors: Doctor[] = []

	selectedDoctor: Doctor[] = []

	isProcessing: boolean | 'complete' = false

	removeDoctor(index: number) {
		this.selectedDoctor.splice(index, 1)
	}

	selectDoctor() {
		new BaseService(this.http, `${ROUTES.DOCTOR}/search`)
			.create({ keyword: this.form.value.keyword })
			.subscribe({
				next: (doctors: Doctor[]) => {
					this.doctors = doctors
				},
			})
	}

	onSelectDoctor(doctor: Doctor) {
		if (
			this.selectedDoctor.some(
				(selectedDoctor: Doctor) =>
					doctor.id === selectedDoctor.id,
			)
		) {
			return this.alert.Fire({
				title: `Unable to add doctor.`,
				description: `You already added ${doctor.name}.`,
				type: 'error',
			})
		}

		this.selectedDoctor.push(doctor)
	}

	file!: File | any

	src: any = undefined

	form = new FormGroup({
		name: new FormControl('', [
			Validators.required,
			Validators.minLength(3),
		]),

		valid_until: new FormControl('', [Validators.required]),

		startAt: new FormControl('', [Validators.required]),

		highlights: new FormControl('', [
			Validators.required,
			Validators.minLength(13),
		]),

		termsAndConditions: new FormControl('', [
			Validators.required,
			Validators.minLength(13),
		]),

		keyword: new FormControl(''),

		discount: new FormControl(''),
	})

	readFileURL(event: any): void {
		this.file = event.target.files[0] as File

		const reader = new FileReader()

		reader.readAsDataURL(this.file)

		reader.onload = (e: any) => {
			this.src = reader.result
		}
	}

	save() {
		this.isProcessing = true
		new BaseService(this.http, ROUTES.CLINIC_PROMOTIONS)
			.create({
				...this.form.value,
				selectedDoctors: this.selectDoctor,
			})
			.subscribe({
				next: (data: ClinicPromotion) => {
					this.saveFiles(data)
					this.alert.Fire({
						title: `Promotions Published`,
						description: `${this.form.value.name} has been added to your clinic promotion`,
						type: 'success',
					})
				},
			})
	}

	saveFiles(data: ClinicPromotion) {
		if (this.file === undefined) {
			this.isProcessing === 'complete'
			return
		}
		let form = new FormData()

		form.append('photos', this.file, this.file.name)

		form.append('id', data.id + '')

		new BaseService(
			this.http,
			`${ROUTES.CLINIC_PROMOTIONS_PHOTOS}/upload`,
		)
			.create(form)
			.subscribe({
				complete: () => {
					this.alert.Fire({
						title: `Banners Uploaded`,
						description: `Banners has been updated`,
						type: 'success',
					})
					location.reload()
				},
			})
	}
}
