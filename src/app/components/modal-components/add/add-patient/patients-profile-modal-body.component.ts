import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { resolveName } from 'src/app/constants/App.functions'
import { Patient } from 'src/app/models/types'
import { ROUTES } from 'src/app/routes/api.routes'
import { BaseService } from 'src/app/services/api/base.api.service'
import { AlertService } from 'src/app/services/utilities/alert.service'

@Component({
	selector: 'AddPatientModal',
	templateUrl: './patients-profile-modal-body.component.html',
	styleUrls: ['./patients-profile-modal-body.component.scss'],
})
export class PatientsProfileModalBodyComponent implements OnInit {
	constructor(private http: HttpClient, private alert: AlertService) {}

	ngOnInit(): void {}

	isProcessing: boolean | 'complete' = false

	sex: 'M' | 'F' = 'M'

	type = 'Walk-in'

	form = new FormGroup({
		first: new FormControl('', [Validators.required, Validators.minLength(3)]),

		middle: new FormControl(''),

		last: new FormControl('', [Validators.required, Validators.minLength(3)]),

		ext: new FormControl(''),

		address: new FormControl('', [Validators.required, Validators.minLength(5)]),

		religion: new FormControl(''),

		dob: new FormControl('', [Validators.required]),

		age: new FormControl('', [Validators.required]),

		city: new FormControl('', [Validators.required, Validators.minLength(5)]),

		country: new FormControl('', [Validators.required, Validators.minLength(2)]),

		phone: new FormControl('', [Validators.required, Validators.minLength(6)]),

		email: new FormControl('', [Validators.required, Validators.email]),
	})

	avatar!: File | any

	avatarSrc!: any

	setSex(sex: 'M' | 'F') {
		this.sex = sex
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
				description: `Please add the Patient's photo.`,
				type: 'warning',
			})
		}

		const patient = Object.assign(
			{ type: this.type, sex: this.sex },
			this.form.value,
		)

		new BaseService(this.http, ROUTES.PATIENTS).create(patient).subscribe({
			next: (data: Patient) => {
				this.saveAvatar(data)
			},
			complete: () => {},

			error: () => {
				this.isProcessing = false
			},
		})
	}

	saveAvatar(patient: Patient) {
		const form = new FormData()

		form.append('avatar', this.avatar, this.avatar.name)

		form.append('id', patient.id + '')

		new BaseService(this.http, `${ROUTES.DOCTOR}/upload`).create(form).subscribe({
			complete: () => {
				this.isProcessing = 'complete'

				this.form.reset()

				this.alert.Fire({
					title: 'Patient Added.',
					description: `${resolveName(
						patient,
						'normal',
					)} has been added to patient's list.`,
					type: 'success',
				})
			},

			error: () => {
				this.isProcessing = false
			},
		})
	}
}
