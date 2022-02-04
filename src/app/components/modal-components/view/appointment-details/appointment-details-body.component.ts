import { Component, Input, OnInit } from '@angular/core'
import { resolveAge, resolveName } from 'src/app/constants/App.functions'
import { Appointment, Patient } from 'src/app/models/types'
import { ModalService } from 'src/app/services/utilities/modal.service'

@Component({
	selector: 'AppointmentDetails',
	templateUrl: './appointment-details-body.component.html',
	styleUrls: ['./appointment-details-body.component.scss'],
})
export class AppointmentDetailsBodyComponent implements OnInit {
	constructor(private modalService: ModalService) {}

	ngOnInit(): void {}

	@Input() appointment!: Appointment

	resolveName(patient: Patient): string {
		return resolveName(patient, 'normal')
	}

	resolveAge(patient: Patient): number {
		return resolveAge(patient.dob)
	}
}
