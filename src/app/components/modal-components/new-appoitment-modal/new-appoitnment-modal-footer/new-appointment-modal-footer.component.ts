import { Component, OnInit } from '@angular/core'
import { ModalService } from 'src/app/services/utilities/modal.service'

@Component({
	selector: 'app-new-appointment-modal-footer',
	templateUrl: './new-appointment-modal-footer.component.html',
	styleUrls: ['./new-appointment-modal-footer.component.scss'],
})
export class NewAppointmentModalFooterComponent implements OnInit {
	constructor(protected modalService: ModalService) {}

	ngOnInit(): void {}

	cancelBtn() {}

	scheduleBtn() {}
}
