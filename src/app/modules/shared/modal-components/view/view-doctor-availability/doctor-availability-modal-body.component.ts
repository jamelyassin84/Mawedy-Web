import { Component, Input, OnInit } from '@angular/core'
import { weekDaysShort } from 'src/app/core/constants/App.constants'
import { Day, Doctor } from 'src/app/models/types'

@Component({
	selector: 'DoctorAvailabilityDetails',
	templateUrl: './doctor-availability-modal-body.component.html',
	styleUrls: ['./doctor-availability-modal-body.component.scss'],
})
export class DoctorAvailabilityModalBodyComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {
		this.resolveAvailability()
	}

	today = new Date(Date.now()).getDay()

	@Input() doctor!: Doctor

	isAvailable: boolean = false

	resolveAvailability() {
		for (let value of this.doctor.clinicDoctorWorkingSchedules) {
			if (
				weekDaysShort[this.today] === value.day &&
				value.isActive === true
			) {
				return (this.isAvailable = true)
			}
		}
		return (this.isAvailable = false)
	}
}
