import { Modal } from './../models/Modal.interface'
import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class ModalService {
	constructor() {}

	private modal = new Subject<Modal | undefined>()
	private confirmModal = new Subject<boolean>()

	showModal(modalData: Modal | undefined): void {
		this.modal.next(modalData)
	}

	getModalValue() {
		return this.modal.asObservable()
	}

	showConfirm(value: boolean) {
		this.confirmModal.next(value)
	}

	getConfirmModalValue() {
		return this.confirmModal.asObservable()
	}
}
