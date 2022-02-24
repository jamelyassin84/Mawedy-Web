import { listAnimation } from '../../../../animations/List.animation'
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { ClinicMedicalService } from 'src/app/models/types'

@Component({
	selector: 'dropdown-medical-services',
	templateUrl: './dropdown-medical-services.component.html',
	styleUrls: ['./dropdown-medical-services.component.scss'],
	animations: [listAnimation],
})
export class DropdownMedicalServicesComponent implements OnInit {
	constructor() {}

	@Input() medicalServices: ClinicMedicalService[] = []
	@Input() selectedMedicalService: ClinicMedicalService[] | any = []

	@Output() onSelectMedicalService = new EventEmitter<ClinicMedicalService>()

	ngOnInit(): void {}

	onSelectedMedicalService(medicalService: ClinicMedicalService) {
		this.selectedMedicalService.push(medicalService)
		this.onSelectMedicalService.emit(medicalService)
	}
}
