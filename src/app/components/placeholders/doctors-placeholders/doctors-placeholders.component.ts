import { Component, OnInit } from '@angular/core'
import { ClinicAccountService } from 'src/app/services/utilities/clinic-account.service'

@Component({
	selector: 'doctors-placeholders',
	templateUrl: './doctors-placeholders.component.html',
	styleUrls: ['./doctors-placeholders.component.scss'],
})
export class DoctorsPlaceholdersComponent implements OnInit {
	constructor(private account: ClinicAccountService) {}

	ngOnInit(): void {}

	name = this.account.getName()
}
