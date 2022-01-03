import { ModalService } from '../../../services/utilities/modal.service'
import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'center-small-modal',
	templateUrl: './center-small-modal.component.html',
	styleUrls: ['./center-small-modal.component.scss'],
})
export class CenterSmallModalComponent implements OnInit {
	constructor(private modalService: ModalService) {}

	ngOnInit(): void {}

	@Input() header: any
	@Input() body: any

	hide() {
		this.modalService.showModal({
			value: false,
			header: '',
			body: '',
			footer: '',
			type: 'Center Small',
		})
	}
}
