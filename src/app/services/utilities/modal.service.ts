import { AppState } from 'src/app/app.state'
import { ConfirmModal, Modal } from '../../models/Modal.interface'
import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'
import { Store } from '@ngrx/store'
import { ModalChange } from 'src/app/actions/modal/modal.actions'
@Injectable({
	providedIn: 'root',
})
export class ModalService {
	constructor() {}

	private modal = new Subject<Modal | undefined>()
	private confirmModal = new Subject<ConfirmModal>()

	showModal(modalData: Modal): void {
		this.modal.next(modalData)
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
