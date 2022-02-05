import { AlertService } from 'src/app/services/utilities/alert.service'
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
	constructor(private alert: AlertService, private router: Router) {
		this.alert.Fire({
			title: 'Hi there! We are using cookies',
			description: 'We use them for you to have an optimum browser experience.',
			type: 'info',
		})
	}
	ngOnInit(): void {
		this.logAccountUserIfExist()
	}

	logAccountUserIfExist() {
		if (localStorage.getItem('account') !== null) {
			this.router.navigate(['/home'])
		}
	}
}
