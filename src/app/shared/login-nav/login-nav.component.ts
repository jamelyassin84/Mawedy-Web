import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'login-nav',
	templateUrl: './login-nav.component.html',
	styleUrls: ['./login-nav.component.scss', './_mobile.scss'],
})
export class LoginNavComponent implements OnInit {
	innerWidth = window.innerWidth
	constructor() {}

	ngOnInit(): void {}

	logout() {
		localStorage.clear()
	}
}
