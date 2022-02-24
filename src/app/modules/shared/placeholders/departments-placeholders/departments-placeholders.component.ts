import { Component, OnInit } from '@angular/core'
import { ClinicAccountService } from 'src/app/services/utilities/clinic-account.service'

@Component({
	selector: 'departments-placeholders',
	templateUrl: './departments-placeholders.component.html',
	styleUrls: ['./departments-placeholders.component.scss'],
})
export class DepartmentsPlaceholdersComponent implements OnInit {
	constructor(private account: ClinicAccountService) {}

	ngOnInit(): void {}

	name = this.account.getName()
}
