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

	cancelSchedule() {
		this.hideModal()
		this.modalService.showConfirm({
			type: 'Confirm',
			firstLine: 'Are you sure you to cancel',
			secondLine: 'this appointment?',
			onCLose: () => {},
			onSubmit: () => {
				this.showConfirmation()
			},
			value: true,
		})
		localStorage.setItem('type', 'Confirm')
	}

	reSchedule() {}

	reAssign() {}

	showConfirmation() {}

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
