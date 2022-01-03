import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BaseAPIService } from './base.api.service'

@Injectable({
	providedIn: 'root',
})
export class UsersService extends BaseAPIService {
	constructor(private _http: HttpClient) {
		super(_http, 'users', '')
	}

	user: any = localStorage.getItem('user')

	id() {
		return JSON.parse(this.user)?.id || ''
	}

	name() {
		return JSON.parse(this.user)?.fullname || ''
	}

	role() {
		return localStorage.getItem('role') || ''
	}

	isAdmin() {
		return localStorage.getItem('role') === null ? false : true
	}

	isSuperAdmin() {
		return localStorage.getItem('role') === 'Super Admin' ? true : false
	}
}
