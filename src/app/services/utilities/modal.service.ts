import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs'
@Injectable({
	providedIn: 'root',
})
export class ModalService {
	constructor() {}

	private modal = new Subject<boolean>()

	showModal(value: boolean): void {
		this.modal.next(value)
	}

	getModalValue(): Observable<boolean> {
		return this.modal.asObservable()
	}
}
