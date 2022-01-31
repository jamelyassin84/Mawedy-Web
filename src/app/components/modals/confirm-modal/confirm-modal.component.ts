import { ModalService } from '../../../services/utilities/modal.service'
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
	@Input() animationState!: boolean

	close() {
		this.onCLose()
	}

	submit() {
		this.onSubmit()
	}
}
