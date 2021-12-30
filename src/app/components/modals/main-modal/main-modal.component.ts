import { Component, Input, OnInit } from '@angular/core'
import { openFromRight } from 'src/app/animations/FromRight'
import { ConfirmModal } from 'src/app/models/Modal.interface'
import { ModalService } from 'src/app/services/modal.service'

@Component({
	selector: 'app-main-modal',
	templateUrl: './main-modal.component.html',
	styleUrls: ['./main-modal.component.scss'],
	animations: openFromRight(),
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
	}

	ngOnInit(): void {}

	@Input() header: any
	@Input() body: any
	@Input() footer: any
	type: any = localStorage.getItem('type')

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
