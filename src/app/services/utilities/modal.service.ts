import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, Subject } from 'rxjs'
@Injectable({
	providedIn: 'root',
})
export class ModalService {
	constructor() {}

	private modal = new BehaviorSubject<boolean>(false)

	showModal(value: boolean): void {
		this.modal.next(value)
	}

	getModalValue(): Observable<boolean> {
		return this.modal.asObservable()
	}
}
