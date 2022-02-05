import { Injectable } from '@angular/core'

@Injectable({
	providedIn: 'root',
})
export class ClinicAccountService {
	constructor() {}

	getID() {
		const account: any = localStorage.getItem('account')
		return JSON.parse(account).id
	}

	getName() {
		const account: any = localStorage.getItem('account')
		return JSON.parse(account).name
	}
}
