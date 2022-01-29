import { Clinic } from './../../../models/types'
import { BaseService } from './../../../services/api/base.api.service'
import { ROUTES } from './../../../routes/api.routes'
import { HttpClient } from '@angular/common/http'
import { AlertService } from 'src/app/services/utilities/alert.service'
import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
	selector: 'app-login-section2',
	templateUrl: './login-section2.component.html',
	styleUrls: ['./login-section2.component.scss'],
})
export class LoginSection2Component implements OnInit {
	constructor(protected alert: AlertService, private http: HttpClient) {}

	ngOnInit(): void {
		this.populateUser(2)
	}

	isProcessing: boolean | 'complete' = false

	users: any = []

	signInTab = 1

	filename!: string

	files!: File[]

	clinic: Clinic | any = {
		registeredVia: 'web',
		password: '123',
	}

	informationForm = new FormGroup({
		name: new FormControl('', [Validators.required, Validators.minLength(3)]),

		address: new FormControl('', [Validators.required, Validators.minLength(5)]),

		email: new FormControl('', [Validators.required, Validators.email]),

		tradeLicenseNumber: new FormControl('', [Validators.required]),
	})

	uploadFiles(id: string) {
		let formData = new FormData()

		for (let file of this.files) {
			formData.append('files[]', file, file.name)
		}

		formData.append('id', id)
		new BaseService(this.http, `${ROUTES.CLINICS}/files`)
			.create(formData)
			.subscribe({
				complete: () => {},
			})
	}

	trigger(id: any) {
		document.getElementById(id)?.click()
	}

	readFile(event: any) {
		this.files = event.target.files as File[]
	}

	next() {
		const tradeLicenseNumber = this.informationForm.value.tradeLicenseNumber

		if (Number(tradeLicenseNumber) === NaN && tradeLicenseNumber.length !== 6) {
			return this.alert.Fire({
				title: 'Invalid Format.',
				description: 'The format of the trade license is not we expect.',
				type: 'error',
			})
		}

		if (!this.files) {
			return this.alert.Fire({
				title: 'No Trade License Copy.',
				description: 'Please attach your trade license copy.',
				type: 'error',
			})
		}

		this.signInTab = 2
	}

	register(): void {
		alert('ari')
		if (this.clinic.username.length < 8) {
			return this.alert.Fire({
				title: 'Username is too short.',
				description: 'Username should have at least 8 characters.',
				type: 'error',
			})
		}

		const data = Object.assign(this.clinic, { users: this.users })

		new BaseService(this.http, ROUTES.CLINICS).create(data).subscribe({
			next: (response) => {
				this.uploadFiles(response.id)

				this.isProcessing = false
			},

			complete: () => {},
		})
	}

	addUsers(input: any) {
		this.users = []

		const count = parseInt(input.target.value)
		for (let i = 0; i < count; i++) {
			this.users.push(i + 1)
		}
	}

	populateUser(iterations: number) {
		this.users = []

		for (let i = 0; i < iterations; i++) {
			this.users.push({
				id: i,
				name: '',
			})
		}
	}
}
