import { ClinicDto } from './../../models/clinic.model'
import { Injectable } from '@angular/core'

@Injectable({
	providedIn: 'root',
})
export class UserService {
	constructor() {}
}

export const hasEdited = () => {
	const user: any = localStorage.getItem('user')

	const data: ClinicDto = JSON.parse(user)
	if (data.description === '') {
		return 'clinic-profile'
	}
	return 'dashboard'
}
