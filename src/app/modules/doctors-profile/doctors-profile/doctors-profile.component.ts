import { Component, OnInit } from '@angular/core'
import { ModalService } from 'src/app/services/utilities/modal.service'

@Component({
	selector: 'doctors-profile',
	templateUrl: './doctors-profile.component.html',
	styleUrls: ['./doctors-profile.component.scss'],
})
export class DoctorsProfileComponent implements OnInit {
	constructor(private modalService: ModalService) {}

	ngOnInit(): void {}

	showModal(header: any, body: any, footer: any) {
		this.modalService.showModal({
			value: true,
			header: header,
			body: body,
			footer: footer,
			type: 'Right',
		})
	}

	viewAvailability(header: any, body: any, footer: any) {
		this.modalService.showModal({
			value: true,
			header: header,
			body: body,
			footer: footer,
			type: 'Center Medium',
		})
	}
}
