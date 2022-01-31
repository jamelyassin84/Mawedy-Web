import { Component, OnInit } from '@angular/core'
import { ModalService } from 'src/app/services/utilities/modal.service'

@Component({
	selector: 'toolbar-patients',
	templateUrl: './patients.component.html',
	styleUrls: ['./patients.component.scss'],
})
export class PatientsToolbarComponent implements OnInit {
	constructor(private modalService: ModalService) {}

	ngOnInit(): void {}

	showModal(header: any, body: any, footer: any) {}
}
