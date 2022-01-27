import { HttpClient } from '@angular/common/http'
import { AlertService } from 'src/app/services/utilities/alert.service'
import { Router } from '@angular/router'
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core'

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
		this.router.navigate(['/home'])
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
