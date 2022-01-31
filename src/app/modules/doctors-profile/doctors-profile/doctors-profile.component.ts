import { Component, OnInit } from '@angular/core'
import { listAnimation } from 'src/app/animations/List.animation'
import { ModalService } from 'src/app/services/utilities/modal.service'

@Component({
	selector: 'doctors-profile',
	templateUrl: './doctors-profile.component.html',
	styleUrls: ['./doctors-profile.component.scss'],
	animations: [listAnimation],
})
export class DoctorsProfileComponent implements OnInit {
	constructor(private modalService: ModalService) {}

	ngOnInit(): void {}

	showModal(header: any, body: any, footer: any) {}

	viewAvailability(header: any, body: any, footer: any) {}
}
