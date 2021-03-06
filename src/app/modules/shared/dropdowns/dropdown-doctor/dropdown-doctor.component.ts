import { listAnimation } from 'src/app/animations/List.animation'
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Doctor } from 'src/app/models/types'

@Component({
	selector: 'dropdown-doctor',
	templateUrl: './dropdown-doctor.component.html',
	styleUrls: ['./dropdown-doctor.component.scss'],
	animations: [listAnimation],
})
export class DropdownDoctorComponent implements OnInit {
	constructor() {}

	@Input() width!: string | number

	@Input() doctors: Doctor[] = []
	@Input() selectedDoctor: Doctor[] | any = []

	@Output() onSelectDoctor = new EventEmitter<Doctor>()

	ngOnInit(): void {
		this.filterDoctor()
	}

	filterDoctor() {}

	onSelectedDoctor(doctor: Doctor) {
		this.selectedDoctor.push(doctor)
		this.onSelectDoctor.emit(doctor)
	}
}
