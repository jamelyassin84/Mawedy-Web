import { Component, OnInit } from '@angular/core'
import { ModalService } from 'src/app/services/utilities/modal.service'

@Component({
	selector: 'appointment-details-body',
	templateUrl: './appointment-details-body.component.html',
	styleUrls: ['./appointment-details-body.component.scss'],
})
export class AppointmentDetailsBodyComponent implements OnInit {
	constructor(private modalService: ModalService) {}

	ngOnInit(): void {}

	cancelSchedule(header: any, body: any) {
		this.modalService.showConfirm({
			type: 'Confirm',
			firstLine: 'Are you sure you to cancel',
			secondLine: 'this appointment?',
			onCLose: () => {},
			onSubmit: () => {
				this.showConfirmation(header, body)
			},
			value: true,
		})
	}

	reSchedule(body: any) {
		this.modalService.showModal({
			value: true,
			header: '',
			body: body,
			footer: '',
			type: 'Right Blur',
		})
	}

	showConfirmation(header: any, body: any) {
		this.modalService.showModal({
			value: true,
			header: header,
			body: body,
			footer: '',
			type: 'Center Small',
		})
	}
}
