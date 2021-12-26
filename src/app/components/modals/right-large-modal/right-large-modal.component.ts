import { Component, Input, OnInit } from '@angular/core'
import { ModalService } from 'src/app/services/modal.service'

@Component({
	selector: 'right-large-modal',
	templateUrl: './right-large-modal.component.html',
	styleUrls: ['./right-large-modal.component.scss'],
})
export class RightLargeModalComponent implements OnInit {
	constructor(private modalService: ModalService) {}

	ngOnInit(): void {}

	@Input() header: any
	@Input() body: any
	@Input() footer: any

	hide() {
		this.modalService.showModal({
			value: false,
			header: '',
			body: '',
			footer: '',
			type: 'Right',
		})
	}
}
