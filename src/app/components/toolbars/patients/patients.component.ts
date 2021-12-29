import { ModalService } from 'src/app/services/modal.service'
import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'toolbar-patients',
	templateUrl: './patients.component.html',
	styleUrls: ['./patients.component.scss'],
})
export class PatientsToolbarComponent implements OnInit {
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

		localStorage.setItem('type', 'Center Large')
	}
}
