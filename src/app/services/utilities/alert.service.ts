import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'
import { Alert } from 'src/app/models/Alert.type'

@Injectable({
	providedIn: 'root',
})
export class AlertService {
	constructor() {}

	private modal = new Subject<Alert | undefined>()

	Fire(data: Alert | undefined): void {
		this.modal.next(data)
	}

	listen() {
		return this.modal.asObservable()
	}
}
