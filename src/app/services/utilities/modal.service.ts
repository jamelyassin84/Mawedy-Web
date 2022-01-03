import { ConfirmModal, Modal } from '../../models/Modal.interface'
import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class ModalService {
	constructor() {}

	private modal = new Subject<Modal | undefined>()
	private confirmModal = new Subject<ConfirmModal>()

	showModal(modalData: Modal | undefined): void {
		this.modal.next(modalData)
		localStorage.setItem('type', modalData?.type + '')
	}

	getModalValue() {
		return this.modal.asObservable()
	}

	showConfirm(confirmData: ConfirmModal) {
		this.confirmModal.next(confirmData)
	}

	getConfirmModalValue() {
		return this.confirmModal.asObservable()
	}
}
