import { Component, Input, OnInit } from '@angular/core'
import { weekDaysShort } from 'src/app/core/constants/App.constants'
import { Doctor } from 'src/app/models/types'

@Component({
	selector: 'DoctorDetails',
	templateUrl: './view-doctor-body.component.html',
	styleUrls: ['./view-doctor-body.component.scss'],
})
export class ViewDoctorBodyComponent implements OnInit {
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
