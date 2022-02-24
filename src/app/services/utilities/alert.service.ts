import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'
import { Alert } from 'src/app/models/types'

@Injectable({
	providedIn: 'root',
})
export class AlertService {
	constructor() {}

	private alert = new Subject<Alert | undefined>()

	Fire(data: Alert | any): void {
		this.alert.next(data)
	}

	listen() {
		return this.alert.asObservable()
	}
}
