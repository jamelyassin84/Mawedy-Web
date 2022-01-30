import { Component, OnInit } from '@angular/core'
import { listAnimation } from 'src/app/animations/List.animation'
import { ModalService } from 'src/app/services/utilities/modal.service'

@Component({
	selector: 'dashboard-appointments',
	templateUrl: './appointments.component.html',
	styleUrls: ['./appointments.component.scss'],
	animations: [listAnimation],
})
export class AppointmentsComponent implements OnInit {
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
}
