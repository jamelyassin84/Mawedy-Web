import { Component, OnInit } from '@angular/core'
import { ModalService } from 'src/app/services/modal.service'

@Component({
	selector: 'toolbar-doctors-profile',
	templateUrl: './doctors-profile.component.html',
	styleUrls: ['./doctors-profile.component.scss'],
})
export class DoctorsProfileToolbarComponent implements OnInit {
	constructor(private modalService: ModalService) {}

	ngOnInit(): void {}

	showModal(header: any, body: any, footer: any) {
		this.modalService.showModal({
			value: true,
			header: header,
			body: body,
			footer: footer,
			type: 'Center Large',
		})
	}
}
