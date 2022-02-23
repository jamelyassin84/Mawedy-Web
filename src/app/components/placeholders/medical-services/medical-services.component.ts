import { Department } from 'src/app/models/types'
import { Component, Input, OnInit } from '@angular/core'
import { ClinicAccountService } from 'src/app/services/utilities/clinic-account.service'

@Component({
	selector: 'MedicalServicesPlaceholder',
	templateUrl: './medical-services.component.html',
	styleUrls: ['./medical-services.component.scss'],
})
export class MedicalServicesComponent implements OnInit {
	constructor(private account: ClinicAccountService) {}

	ngOnInit(): void {}

	name = this.account.getName()
	@Input() department!: Department
}
