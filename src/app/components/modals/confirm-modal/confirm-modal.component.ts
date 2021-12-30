import { ModalService } from './../../../services/modal.service'
import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'confirm-modal',
	templateUrl: './confirm-modal.component.html',
	styleUrls: ['./confirm-modal.component.scss'],
})
export class ConfirmModalComponent implements OnInit {
	constructor(private service: ModalService) {}

	@Input() firstLine: string | undefined
	@Input() secondLine: string | undefined
	@Input() onCLose: Function | any
	@Input() onSubmit: Function | any

	ngOnInit(): void {}

	close() {
		this.onCLose()
		this.service.showConfirm({
			type: 'Confirm',
			firstLine: '',
			secondLine: '',
			onCLose: () => void 0,
			onSubmit: () => void 0,
			value: false,
		})
	}

	submit() {
		this.onSubmit()
		this.close()
	}
}
