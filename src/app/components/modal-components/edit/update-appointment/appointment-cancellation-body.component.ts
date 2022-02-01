import { ModalService } from '../../../../services/utilities/modal.service'
import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-appointment-cancellation-body',
	templateUrl: './appointment-cancellation-body.component.html',
	styleUrls: ['./appointment-cancellation-body.component.scss'],
})
export class AppointmentCancellationBodyComponent implements OnInit {
	constructor(private modalService: ModalService) {}

	ngOnInit(): void {}

	assignSlotToANewPatient(header: any, body: any, footer: any) {}
}
