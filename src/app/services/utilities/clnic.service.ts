import { Injectable } from '@angular/core'

@Injectable({
	providedIn: 'root',
})
export class ClinicService {
	constructor() {}

	getID() {
		const clinic: any = localStorage.getItem('user')
		return JSON.parse(clinic).id
	}
}
