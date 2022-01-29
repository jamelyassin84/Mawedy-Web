import { AlertService } from 'src/app/services/utilities/alert.service'
import { Component, OnInit } from '@angular/core'

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
	constructor(private alert: AlertService) {
		this.alert.Fire({
			title: 'We use cookies',
			description: 'We use cookies for you to have the optimum browser experience.',
			type: 'info',
		})
	}
	ngOnInit(): void {}
}
