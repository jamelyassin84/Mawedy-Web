import { Injectable } from '@angular/core'
import { Clinic } from 'src/app/models/types'

@Injectable({
	providedIn: 'root',
})
export class UserService {
	constructor() {}
}

export const hasEdited = () => {
	const user: any = localStorage.getItem('user')

	const data: Clinic = JSON.parse(user)
	if (data.description === '') {
		return 'clinic-profile'
	}
	return 'dashboard'
}
