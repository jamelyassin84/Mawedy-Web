import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { TabType } from 'src/app/components/utilities/tabs/tabs.component'
import { ROUTES } from 'src/app/routes/api.routes'
import { BaseService } from 'src/app/services/api/base.api.service'
import { ClinicService } from 'src/app/services/utilities/clnic.service'
import { ModalService } from 'src/app/services/utilities/modal.service'

@Component({
	selector: 'clinic-profile-services',
	templateUrl: './clinic-profile-services.component.html',
	styleUrls: ['./clinic-profile-services.component.scss'],
})
export class ClinicProfileServicesComponent implements OnInit {
	constructor(
		private modalService: ModalService,
		private http: HttpClient,
		private clinic: ClinicService,
	) {}

	ngOnInit(): void {
		this.getDepartments()
	}

	getDepartments() {
		new BaseService(this.http, `${ROUTES.CLINIC_DEPARTMENT}/clinic`)
			.show(this.clinic.getID())
			.subscribe({
				next: (data) => {
					this.tabs = data
					if (data.length !== 0) {
						this.activeTab = data[0].id
					}
				},
			})
	}

	tabs: TabType[] = []
	activeTab: any = 0
	setActiveTab(id: number | string) {
		this.activeTab = id
		this.getServices(id)
	}

	getServices(id: number | string) {}

	showModal(header: any, body: any, footer: any) {
		this.modalService.showModal({
			value: true,
			header: header,
			body: body,
			footer: footer,
			type: 'Center Small',
		})
	}
}
