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
	ngOnInit(): void {}
}
