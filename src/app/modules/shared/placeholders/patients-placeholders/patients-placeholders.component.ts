import { Component, OnInit } from '@angular/core'
import { ClinicAccountService } from 'src/app/services/utilities/clinic-account.service'

@Component({
	selector: 'patients-placeholders',
	templateUrl: './patients-placeholders.component.html',
	styleUrls: ['./patients-placeholders.component.scss'],
})
export class PatientsPlaceholdersComponent implements OnInit {
	constructor(private account: ClinicAccountService) {}

	ngOnInit(): void {}

	name = this.account.getName()
}
