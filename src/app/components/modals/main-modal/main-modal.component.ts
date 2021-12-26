import { Component, OnInit } from '@angular/core'
import { ModalService } from 'src/app/services/modal.service'

@Component({
	selector: 'app-main-modal',
	templateUrl: './main-modal.component.html',
	styleUrls: ['./main-modal.component.scss'],
})
export class MainModalComponent implements OnInit {
	constructor(private modalService: ModalService) {}

	ngOnInit(): void {}

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
