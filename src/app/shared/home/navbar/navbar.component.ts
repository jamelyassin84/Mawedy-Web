import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Fire } from 'src/app/constants/Alert'
import { ClinicDto } from 'src/app/models/clinic.type'
import { ROUTES } from 'src/app/routes/api.routes'
import { BaseService } from 'src/app/services/api/base.api.service'
import { AlertService } from 'src/app/services/utilities/alert.service'
import { ClinicService } from 'src/app/services/utilities/clnic.service'
import { ModalService } from 'src/app/services/utilities/modal.service'

@Component({
	selector: 'home-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
	constructor(
		private http: HttpClient,
		private clinicService: ClinicService,
		private alert: AlertService,
		private router: Router,
	) {}

	ngOnInit(): void {
		this.checkIfHasUserAccount()
	}

	shouldChooseAccount: boolean = true

	checkIfHasUserAccount() {
		if (localStorage.getItem('account') !== null) {
			this.shouldChooseAccount = false
		}
	}

	logout() {
		Fire(
			'Sign-out?',
			`This will not affect other users of ${this.clinicService.getName()} `,
			'question',
			() => {
				localStorage.clear()
				this.alert.Fire({
					title: 'Thank you for using mawedy.',
					description: 'Have a great time.',
					type: 'success',
				})
				this.router.navigate(['/'])
			},
		)
	}
}
