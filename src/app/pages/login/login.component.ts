import { HttpClient } from '@angular/common/http'
import { AlertService } from './../../services/utilities/alert.service'
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { Router } from '@angular/router'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [
		'./login.component.scss',
		'./_large.scss',
		'./_mobile.scss',
		'./_tabletHQ.scss',
		'./_tabletsLQ.scss',
		'./_desktop.scss',
	],
})
export class LoginComponent implements OnInit {
	@ViewChild('username') usernameInput!: ElementRef
	constructor(
		private router: Router,
		protected alert: AlertService,
		private http: HttpClient,
	) {}

	ngOnInit(): void {}

	ngAfterViewInit() {
		this.usernameInput.nativeElement.focus()
	}

	isProcessing: boolean | 'complete' = false

	data: any = {
		username: '',
		type: 'clinic',
	}

	signInTab = 1
	next() {
		this.signInTab = 2
	}

	users: any = [1, 2]
	addUsers(input: any) {
		this.users = []
		const count = parseInt(input.target.value)
		for (let i = 0; i < count; i++) {
			this.users.push(i + 1)
		}
	}

	register(): void {}

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
		this.router.navigate(['/home'])

		// new BaseService(this.http, ROUTES.LOGIN).create(this.data).subscribe(
		// 	(data) => {
		// 		localStorage.setItem('user', JSON.stringify(data.user))
		// 		localStorage.setItem('token', data.token)
		// 		setTimeout(() => {
		// 			this.isProcessing = 'complete'
		// 			setTimeout(() => {
		// 				this.router.navigate(['/home'])
		// 			}, 700)
		// 		}, 1500)
		// 	},
		// 	() => (this.isProcessing = false),
		// )
	}

	clearFields(): void {
		for (let key in this.data) {
			this.data[key] = ''
		}
		this.data['type'] = 'clinic'
		this.usernameInput.nativeElement.focus()
	}
}
