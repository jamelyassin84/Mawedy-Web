import { ModalService } from 'src/app/services/modal.service'
import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-new-appointment-modal-footer',
	templateUrl: './new-appointment-modal-footer.component.html',
	styleUrls: ['./new-appointment-modal-footer.component.scss'],
})
export class NewAppointmentModalFooterComponent implements OnInit {
	constructor(protected modalService: ModalService) {}

	ngOnInit(): void {}

	cancelBtn() {
		this.modalService.showModal({
			value: false,
			header: '',
			body: '',
			footer: '',
			type: 'Right',
		})
	}

	scheduleBtn() {}
}
