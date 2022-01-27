import { HttpClient } from '@angular/common/http'
import { AlertService } from 'src/app/services/utilities/alert.service'
import { Router } from '@angular/router'
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core'
import { BaseService } from 'src/app/services/api/base.api.service'
import { ROUTES } from 'src/app/routes/api.routes'

@Component({
	selector: 'app-login-section1',
	templateUrl: './login-section1.component.html',
	styleUrls: ['./login-section1.component.scss'],
})
export class LoginSection1Component implements OnInit {
	@ViewChild('username') usernameInput!: ElementRef
	constructor(
		private router: Router,
		protected alert: AlertService,
		private http: HttpClient,
	) {}

	isProcessing: boolean | 'complete' = false

	data: any = {
		username: '',
		type: 'clinic',
	}

	login(): void {
		this.isProcessing = true
		for (let key in this.data) {
			if (this.data[key] === '') {
				this.isProcessing = false
				this.clearFields()
				return this.alert.Fire({
					title: 'Error',
					description: `${
						key.charAt(0).toUpperCase() +
						key.substr(1).toLowerCase()
					} should not be empty`,
					type: 'error',
				})
			}
		}
		new BaseService(this.http, ROUTES.LOGIN).create(this.data).subscribe(
			(data) => {
				localStorage.setItem('user', JSON.stringify(data.user))
				localStorage.setItem('token', data.token)
				setTimeout(() => {
					this.isProcessing = 'complete'
					setTimeout(() => {
						this.router.navigate(['/home'])
					}, 700)
				}, 500)
			},
			() => (this.isProcessing = false),
		)
	}

	clearFields(): void {
		for (let key in this.data) {
			this.data[key] = ''
		}
		this.data['type'] = 'clinic'
		this.usernameInput.nativeElement.focus()
	}

	ngOnInit(): void {}

	ngAfterViewInit() {
		this.usernameInput.nativeElement.focus()
	}
}
