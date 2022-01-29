import { AlertService } from 'src/app/services/utilities/alert.service'
import { ClinicAccount } from './../../../models/types'
import { BaseService } from 'src/app/services/api/base.api.service'
import { HttpClient } from '@angular/common/http'
import { ClinicService } from 'src/app/services/utilities/clnic.service'
import { Component, OnInit } from '@angular/core'
import { ROUTES } from 'src/app/routes/api.routes'

@Component({
	selector: 'app-whos-account',
	templateUrl: './whos-account.component.html',
	styleUrls: ['./whos-account.component.scss'],
})
export class WhosAccountComponent implements OnInit {
	constructor(
		private clinic: ClinicService,
		private http: HttpClient,
		private alert: AlertService,
	) {}

	ngOnInit(): void {
		this.getClinicAccounts()
	}

	accounts!: ClinicAccount[]
	getClinicAccounts() {
		new BaseService(this.http, `${ROUTES.CLINIC_ACCOUNTS}/clinic`)
			.show(this.clinic.getID())
			.subscribe({
				next: (data: ClinicAccount[]) => {
					this.accounts = data
				},
			})
	}

	selectAccount(account: ClinicAccount) {
		if (account.isLoggedIn) {
			return this.alert.Fire({
				title: 'Aww snap!',
				description: 'This is account is already logged-in.',
				type: 'warning',
			})
		}

		this.setToLoggedIn(account.id)

		this.alert.Fire({
			title: `Welcome back to mawedy ${account.name}. `,
			description: 'You will be checked-in in a moment.',
			type: 'success',
		})
	}

	setToLoggedIn(id: number) {
		new BaseService(this.http, `${ROUTES.CLINIC_ACCOUNTS}/log-in`)
			.create({ id: id })
			.subscribe({
				next: (data: ClinicAccount) => {
					localStorage.setItem('account', JSON.stringify(data))

					location.reload()
				},
			})
	}

	resolveAvatar(index: number) {
		return `../../../../assets/app/avatars/${index + 2}.jpg`
	}
}
