import { Clinic } from './../../../models/types'
import { BaseService } from './../../../services/api/base.api.service'
import { ROUTES } from './../../../routes/api.routes'
import { HttpClient } from '@angular/common/http'
import { AlertService } from 'src/app/services/utilities/alert.service'
import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AlertMessage } from 'src/app/constants/Alert'
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

	radios: any = {
		premium: false,
		trial: true,
		web: false,
		mobile: false,
	}

	emailAlreadyExist = false

	informationForm = new FormGroup({
		name: new FormControl('', [Validators.required, Validators.minLength(3)]),

		address: new FormControl('', [Validators.required, Validators.minLength(5)]),

		email: new FormControl('', [Validators.required, Validators.email]),

		tradeLicenseNumber: new FormControl('', [Validators.required]),
	})

	handleEmailChange(event: any) {
		new BaseService(this.http, `${ROUTES.EMAILS}/check-if-exist`)
			.create({ email: event.target.value })
			.subscribe({
				next: (data: boolean) =>
					!data ? (this.emailAlreadyExist = false) : (this.emailAlreadyExist = true),
			})
	}

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

	handleRadio(radio: string) {
		for (let key in this.radios) {
			this.radios[key] = false
		}
		this.radios[radio] = true
		this.clinic.subscription = radio
	}

	register(): void {
		if (this.clinic.username.length < 8) {
			return this.alert.Fire({
				title: 'Username is too short.',
				description: 'Username should have at least 8 characters.',
				type: 'error',
			})
		}

		const data = Object.assign(
			{ users: this.users },
			this.informationForm.value,
			this.clinic,
		)

		new BaseService(this.http, ROUTES.CLINICS).create(data).subscribe({
			next: (response) => {
				this.uploadFiles(response.id)

				this.isProcessing = false
			},
			complete: () => {
				this.signInTab = 1
				this.informationForm.reset()
				this.files = []
				AlertMessage(
					'We are excited to become your partner!',
					'Mawedy is verifying your account and will send you an email regarding your registration',
					'success',
				)
			},
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
