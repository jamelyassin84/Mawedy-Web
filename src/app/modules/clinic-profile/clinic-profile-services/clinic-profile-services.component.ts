import { Component, OnInit } from '@angular/core'
import { TabType } from 'src/app/components/utilities/tabs/tabs.component'
import { ModalService } from 'src/app/services/modal.service'

@Component({
	selector: 'clinic-profile-services',
	templateUrl: './clinic-profile-services.component.html',
	styleUrls: ['./clinic-profile-services.component.scss'],
})
export class ClinicProfileServicesComponent implements OnInit {
	tabs: TabType[] = [
		{ title: 'Dentistry', active: true },
		{ title: 'Radiology', active: false },
		{ title: 'Pediatric', active: false },
		{ title: 'Physiotherapy', active: false },
	]

	constructor(private modalService: ModalService) {}

	ngOnInit(): void {}

	showModal(header: any, body: any, footer: any) {
		this.modalService.showModal({
			value: true,
			header: header,
			body: body,
			footer: footer,
			type: 'Center Large',
		})

		localStorage.setItem('type', 'Center Large')
	}
}
