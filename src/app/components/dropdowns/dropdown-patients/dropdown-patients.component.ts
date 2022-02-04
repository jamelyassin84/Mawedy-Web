import { listAnimation } from './../../../animations/List.animation'
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { resolveAge, resolveName } from 'src/app/constants/App.functions'
import { Patient } from 'src/app/models/types'

@Component({
	selector: 'dropdown-patients',
	templateUrl: './dropdown-patients.component.html',
	styleUrls: ['./dropdown-patients.component.scss'],
	animations: [listAnimation],
})
export class DropdownPatientsComponent implements OnInit {
	constructor() {}

	@Input() patients: Patient[] = []
	@Input() selectedPatient: Patient[] | any = []

	@Output() onSelectPatient = new EventEmitter<Patient>()

	ngOnInit(): void {}

	onSelectedPatient(patient: Patient) {
		this.selectedPatient.push(patient)
		this.onSelectPatient.emit(patient)
	}

	resolveName(patient: Patient): string {
		return resolveName(patient, 'normal')
	}

	resolveAge(patient: Patient): number {
		return resolveAge(patient.dob)
	}
}
