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

	cancelSchedule(header: any, body: any) {}

	reSchedule(body: any) {}

	showConfirmation(header: any, body: any) {}
}
