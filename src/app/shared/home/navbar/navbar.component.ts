import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Fire } from 'src/app/core/constants/Alert'
import { ROUTES } from 'src/app/routes/api.routes'
import { BaseService } from 'src/app/services/api/base.api.service'
import { AlertService } from 'src/app/services/utilities/alert.service'
import { ClinicAccountService } from 'src/app/services/utilities/clinic-account.service'
import { ClinicService } from 'src/app/services/utilities/clnic.service'

@Component({
	selector: 'home-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
	constructor(
		private http: HttpClient,
		private clinicService: ClinicService,
		private clinicAccountService: ClinicAccountService,
		private alert: AlertService,
		private router: Router,
	) {}

	ngOnInit(): void {}

	logout() {
		Fire(
			'Sign-out?',
			`This will not affect other users of ${this.clinicService.getName()} `,
			'question',
			() => {
				new BaseService(this.http, `${ROUTES.AUTH}/logout`)
					.create({
						clinicAccount:
							this.clinicAccountService.getID(),
					})
					.subscribe({
						next: () => {
							localStorage.clear()
							this.alert.Fire({
								title: 'Thank you for using mawedy.',
								description:
									'Have a great time.',
								type: 'success',
							})
							this.router.navigate(['/'])
						},
					})
			},
		)
	}
}
