import { trigger, transition, query, animate, style } from '@angular/animations'
import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { ConfirmModal, Modal } from 'src/app/models/Modal.interface'
import { ModalService } from 'src/app/services/utilities/modal.service'

@Component({
	selector: 'app-main-modal',
	templateUrl: './main-modal.component.html',
	styleUrls: ['./main-modal.component.scss'],
})
export class MainModalComponent implements OnInit {
	constructor(private modalService: ModalService) {
		this.modalService
			.getConfirmModalValue()
			.subscribe((confirmData: ConfirmModal) => {
				this.firstLine = confirmData.firstLine

				this.secondLine = confirmData.secondLine

				this.onCLose = confirmData.onCLose

				this.onSubmit = confirmData.onSubmit

				this.type = confirmData.type
			})

		this.modalService.getModalValue().subscribe((modalData: Modal | any) => {
			this.header = modalData.header

			this.body = modalData.body

			this.footer = modalData.footer

			this.type = modalData.type

			this.animationState = modalData.value
		})
	}

	ngOnInit(): void {}

	@Input() type: any = localStorage.getItem('type')

	@Input() header: any

	@Input() body: any

	@Input() footer: any

	@Input() animationState: boolean = false

	@Input() firstLine: string | undefined

	@Input() secondLine: string | undefined

	@Input() onCLose: Function | undefined

	@Input() onSubmit: Function | undefined

	hide(): void {
		this.modalService.showModal({
			value: false,
			header: '',
			body: '',
			footer: '',
			type: 'none',
		})
	}
}
