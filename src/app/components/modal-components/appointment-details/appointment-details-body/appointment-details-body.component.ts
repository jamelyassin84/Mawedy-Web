import { ModalService } from 'src/app/services/modal.service'
import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'appointment-details-body',
	templateUrl: './appointment-details-body.component.html',
	styleUrls: ['./appointment-details-body.component.scss'],
})
export class AppointmentDetailsBodyComponent implements OnInit {
	constructor(private modalService: ModalService) {}

	ngOnInit(): void {}

	cancelSchedule(header: any, body: any) {
		this.hideModal()
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
		localStorage.setItem('type', 'Confirm')
	}

	reSchedule() {}

	reAssign() {}

	showConfirmation(header: any, body: any) {
		this.modalService.showModal({
			value: true,
			header: header,
			body: body,
			footer: '',
			type: 'Center Small',
		})
		localStorage.setItem('type', 'Center Small')
	}

	hideModal() {
		this.modalService.showModal({
			value: false,
			header: '',
			body: '',
			footer: '',
			type: 'Confirm',
		})
	}
}
