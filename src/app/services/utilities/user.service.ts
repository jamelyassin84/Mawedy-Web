import { Injectable } from '@angular/core'
import { ClinicDto } from 'src/app/models/clinic.type'

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
