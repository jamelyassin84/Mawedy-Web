import { ClinicDoctorWorkingSchedule, Doctor } from '../../../../models/types'
import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ClinicService } from 'src/app/services/utilities/clnic.service'
import { HttpClient } from '@angular/common/http'
import { BaseService } from 'src/app/services/api/base.api.service'
import { ROUTES } from 'src/app/routes/api.routes'
import { weekDaysShort } from 'src/app/constants/App.constants'

@Component({
	selector: 'app-doctors-profile-body',
	templateUrl: './doctors-profile-body.component.html',
	styleUrls: ['./doctors-profile-body.component.scss'],
})
export class DoctorsProfileBodyComponent implements OnInit {
	constructor(private clinicService: ClinicService, private http: HttpClient) {}

	workingSchedules: ClinicDoctorWorkingSchedule[] = []

	ngOnInit(): void {
		for (let day of weekDaysShort) {
			this.workingSchedules.push({
				day: day,
				isActive: false,
			})
		}
	}

	setWorkingScheduleMode: 'Custom' | 'All' | 'None' = 'Custom'

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

	doctorForm = new FormGroup({
		name: new FormControl('', [Validators.required, Validators.minLength(3)]),

		title: new FormControl('', [Validators.required, Validators.email]),

		profession: new FormControl('', [Validators.required]),

		specialties: new FormControl('', [Validators.required]),

		yearsOfExperience: new FormControl('', [Validators.required]),

		about: new FormControl('', [Validators.required]),
	})

	doctor!: Doctor
	avatar!: File
	avatarSrc!: any
	readFile(event: any): void {
		this.avatar = event.target.files[0] as File

		const reader = new FileReader()

		reader.readAsDataURL(this.avatar)

		reader.onload = (e: any) => {
			this.avatarSrc = e.target.result
		}
	}

	save() {
		const data = Object.assign(
			{ clinicID: this.clinicService.getID() },
			this.doctorForm,
		)

		new BaseService(this.http, ROUTES.DOCTOR).create(data).subscribe({
			next: () => {},
		})
	}
}
