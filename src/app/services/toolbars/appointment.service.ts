import { Subject } from 'rxjs'
import { Injectable } from '@angular/core'

@Injectable({
	providedIn: 'root',
})
export class AppointmentService {
	constructor() {}

	private date = new Subject<number>()

	setDate(date: number) {
		this.date.next(date)
	}

	getDate() {
		return this.date.asObservable()
	}
}
