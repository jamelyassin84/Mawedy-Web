import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { ClinicDto } from 'src/app/models/clinic.type'
import { ROUTES } from 'src/app/routes/api.routes'
import { BaseService } from 'src/app/services/api/base.api.service'
import { ClinicService } from 'src/app/services/utilities/clnic.service'
import { ModalService } from 'src/app/services/utilities/modal.service'

@Component({
	selector: 'home-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
	constructor(
		private modalService: ModalService,
		private http: HttpClient,
		private clinicService: ClinicService,
	) {}

	showModal(header: any, body: any, footer: any) {
		this.modalService.showModal({
			value: true,
			header: header,
			body: body,
			footer: footer,
			type: 'Right',
		})
	}

	logo = ''
	getClinic() {
		new BaseService(this.http, ROUTES.CLINICS)
			.show(this.clinicService.getID())
			.subscribe((data: ClinicDto) => {
				this.logo = data.avatar.avatar
			})
	}
	ngOnInit(): void {
		this.getClinic()
	}
}
