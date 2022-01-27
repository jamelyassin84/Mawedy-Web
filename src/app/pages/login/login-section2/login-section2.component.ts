import { ClinicDto } from './../../../models/clinic.model'
import { BaseService } from './../../../services/api/base.api.service'
import { ROUTES } from './../../../routes/api.routes'
import { HttpClient } from '@angular/common/http'
import { AlertService } from 'src/app/services/utilities/alert.service'
import { Router } from '@angular/router'
import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-login-section2',
	templateUrl: './login-section2.component.html',
	styleUrls: ['./login-section2.component.scss'],
})
export class LoginSection2Component implements OnInit {
	constructor(
		private router: Router,
		protected alert: AlertService,
		private http: HttpClient,
	) {}

	isProcessing: boolean | 'complete' = false
	signInTab = 1

	next() {
		this.signInTab = 2
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

	filename!: string
	files!: File[]
	readFile(event: any) {
		this.files = event.target.files as File[]
	}

	clinic: ClinicDto | any = {
		registeredVia: 'web',
		password: '123',
	}

	register(): void {
		const data = Object.assign(this.clinic, { users: this.users })

		new BaseService(this.http, ROUTES.CLINICS).create(data).subscribe({
			next: (response) => {
				this.uploadFiles(response.id)
				this.isProcessing = false
			},

			complete: () => {},
		})
	}

	users: any = []

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

	ngOnInit(): void {
		this.populateUser(2)
	}
}
