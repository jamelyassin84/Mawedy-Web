import { Component, Input, OnInit } from '@angular/core'
import { ModalService } from 'src/app/services/utilities/modal.service'

@Component({
	selector: 'center-medium-modal',
	templateUrl: './center-medium-modal.component.html',
	styleUrls: ['./center-medium-modal.component.scss'],
})
export class CenterMediumModalComponent implements OnInit {
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
			type: 'Center Medium',
		})
	}
}
