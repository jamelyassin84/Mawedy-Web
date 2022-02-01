import { Component, Input, OnInit } from '@angular/core'
import { Doctor } from 'src/app/models/types'

@Component({
	selector: 'DoctorAvailabilityDetails',
	templateUrl: './doctor-availability-modal-body.component.html',
	styleUrls: ['./doctor-availability-modal-body.component.scss'],
})
export class DoctorAvailabilityModalBodyComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	@Input() doctor!: Doctor
}
