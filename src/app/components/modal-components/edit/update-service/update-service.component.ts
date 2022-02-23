import { HttpClient } from '@angular/common/http'
import { Component, Input, OnInit } from '@angular/core'
import { Fire } from 'src/app/constants/Alert'
import { ClinicMedicalService } from 'src/app/models/types'
import { ROUTES } from 'src/app/routes/api.routes'
import { BaseService } from 'src/app/services/api/base.api.service'
import { AlertService } from 'src/app/services/utilities/alert.service'

@Component({
	selector: 'UpdateService',
	templateUrl: './update-service.component.html',
	styleUrls: ['./update-service.component.scss'],
})
export class UpdateServiceComponent implements OnInit {
	constructor(private alert: AlertService, private http: HttpClient) {}

	ngOnInit(): void {}

	@Input() service!: ClinicMedicalService

	removeService() {
		Fire(
			`Remove ${this.service.name}?`,
			'Are you sure you want to remove the department?',
			'question',
			() => {
				new BaseService(this.http, ROUTES.CLINIC_MEDICAL_SERVICES)
					.destroy(this.service.id)
					.subscribe({
						next: () => {
							this.alert.Fire({
								title: 'Removed',
								description: `${this.service.name} has been removed`,
								type: 'info',
							})
						},
					})
			},
		)
	}
}
