import { AlertService } from './../../services/utilities/alert.service'
import { Component, OnInit } from '@angular/core'
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
	constructor(private router: Router, protected alert: AlertService) {}

	ngOnInit(): void {}

	login() {
		this.router.navigate(['/home'])
		this.success()
	}
	success() {
		this.alert.Fire({
			title: 'Welcome Back!',
			description: 'Jamel Eid Yassin',
			type: 'success',
			isShowing: true,
		})
	}
	error() {
		this.alert.Fire({
			title: 'Invalid Credentials',
			description: 'Username or password is incorrect',
			type: 'error',
			isShowing: true,
		})
	}
}
