import { Component, OnInit } from '@angular/core'
import { ClinicAccountService } from 'src/app/services/utilities/clinic-account.service'

@Component({
	selector: 'appointment-placeholders',
	templateUrl: './appointment-placeholders.component.html',
	styleUrls: ['./appointment-placeholders.component.scss'],
})
export class AppointmentPlaceholdersComponent implements OnInit {
	constructor(private account: ClinicAccountService) {}

	ngOnInit(): void {}

	name = this.account.getName()
}
