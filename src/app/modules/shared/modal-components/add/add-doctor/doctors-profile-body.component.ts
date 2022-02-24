import { Department } from '../../../../../models/types'
import { AlertService } from 'src/app/services/utilities/alert.service'
import {
	ClinicDoctorWorkingSchedule,
	Doctor,
} from '../../../../../models/types'
import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ClinicService } from 'src/app/services/utilities/clnic.service'
import { HttpClient } from '@angular/common/http'
import { BaseService } from 'src/app/services/api/base.api.service'
import { ROUTES } from 'src/app/routes/api.routes'
import { weekDaysShort } from 'src/app/core/constants/App.constants'

@Component({
	selector: 'app-doctors-profile-body',
	templateUrl: './doctors-profile-body.component.html',
	styleUrls: ['./doctors-profile-body.component.scss'],
})
export class DoctorsProfileBodyComponent implements OnInit {
	constructor(
		private clinicService: ClinicService,
		private http: HttpClient,
		private alert: AlertService,
		private clinic: ClinicService,
	) {}

	workingSchedules: ClinicDoctorWorkingSchedule[] = []

	ngOnInit(): void {
		for (let day of weekDaysShort) {
			this.workingSchedules.push({
				day: day,
				isActive: false,
			})
		}
		this.getDepartments()
	}

	departments: Department[] = []

	getDepartments() {
		new BaseService(this.http, `${ROUTES.CLINIC_DEPARTMENT}/clinic`)
			.show(this.clinic.getID())
			.subscribe({
				next: (data: Department[]) => {
					this.departments = data
				},
			})
	}

	isProcessing: boolean | 'complete' = false

	setWorkingScheduleMode: 'Custom' | 'All' | 'None' = 'Custom'

	doctorForm = new FormGroup({
		name: new FormControl('', [
			Validators.required,
			Validators.minLength(3),
		]),

		profession: new FormControl('', [
			Validators.required,
			Validators.minLength(3),
		]),

		title: new FormControl('', [
			Validators.required,
			Validators.minLength(3),
		]),

		specialties: new FormControl('', [
			Validators.required,
			Validators.minLength(3),
		]),

		yearsOfExperience: new FormControl('', [Validators.required]),

		about: new FormControl('', [
			Validators.required,
			Validators.minLength(13),
		]),

		phone: new FormControl('', [Validators.required]),

		email: new FormControl('', [Validators.required, Validators.email]),
	})

	doctor!: Doctor

	avatar!: File | any

	avatarSrc!: any

	setModeAsCustom() {
		this.setWorkingScheduleMode = 'Custom'
	}

	setWorkingSchedules(workingSchedules: ClinicDoctorWorkingSchedule[]) {
		this.workingSchedules = workingSchedules
	}

	setWorkingSchedule(mode: 'All' | 'None') {
		this.setWorkingScheduleMode = mode

		if (mode === 'All') {
			for (let day of this.workingSchedules) {
				day.isActive = true
			}
			return
		}
		for (let day of this.workingSchedules) {
			day.isActive = false
		}
	}

	trigger(id: string): void {
		document.getElementById(id)?.click()
	}

	readFile(event: any): void {
		this.avatar = event.target.files[0] as File

		const reader = new FileReader()

		reader.readAsDataURL(this.avatar)

		reader.onload = (e: any) => {
			this.avatarSrc = e.target.result
		}
	}

	save() {
		if (this.avatar === undefined) {
			return this.alert.Fire({
				title: 'Additional data needed',
				description: `Please add the Doctor's photo.`,
				type: 'warning',
			})
		}

		this.isProcessing = true

		const data = Object.assign(
			{ clinicID: this.clinicService.getID() },
			this.doctorForm.value,
			{ workingSchedules: this.workingSchedules },
		)

		new BaseService(this.http, ROUTES.DOCTOR).create(data).subscribe({
			next: (data: Doctor) => {
				this.saveAvatar(data)
			},

			error: () => {
				this.isProcessing = false
			},
		})
	}

	saveAvatar(data: Doctor) {
		const form = new FormData()

		form.append('avatar', this.avatar, this.avatar.name)

		form.append('id', data.id + '')

		new BaseService(this.http, `${ROUTES.DOCTOR}/upload`)
			.create(form)
			.subscribe({
				complete: () => {
					this.isProcessing = 'complete'

					this.doctorForm.reset()

					this.setWorkingSchedule('None')

					this.alert.Fire({
						title: 'Doctor Added.',
						description: `${data.name} has been added to doctors list.`,
						type: 'success',
					})
				},

				error: () => {
					this.isProcessing = false
				},
			})
	}
}
