import { ConfirmModal, Modal } from './../../models/Modal.interface'
import { Component, OnInit } from '@angular/core'
import { ModalService } from 'src/app/services/utilities/modal.service'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	constructor(private modalService: ModalService) {
		this.modalService
			.getModalValue()
			.subscribe((modalData: Modal | undefined | any) => {
				this.header = modalData.header
				this.body = modalData.body
				this.footer = modalData.footer
				this.showModal = modalData.value
			})

		this.modalService
			.getConfirmModalValue()
			.subscribe((confirmData: ConfirmModal) => {
				this.firstLine = confirmData.firstLine
				this.secondLine = confirmData.secondLine
				this.onCLose = confirmData.onCLose
				this.onSubmit = confirmData.onSubmit
				this.showModal = confirmData.value
			})
	}

	header: any
	body: any
	footer: any

	firstLine: any
	secondLine: any
	onCLose: any
	onSubmit: any

	showModal = false

	ngOnInit(): void {}
}
