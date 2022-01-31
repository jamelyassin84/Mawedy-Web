import { Component, OnInit } from '@angular/core'
import { ModalService } from 'src/app/services/utilities/modal.service'

@Component({
	selector: 'toolbar-patients-info',
	templateUrl: './patients-info-toolbar.component.html',
	styleUrls: ['./patients-info-toolbar.component.scss'],
})
export class PatientsInfoToolbarComponent implements OnInit {
	constructor(private modalService: ModalService) {}

	ngOnInit(): void {}

	showModal(header: any, body: any, footer: any) {}
}
