import { Component, OnInit } from '@angular/core'
import { ModalService } from 'src/app/services/modal.service'

@Component({
	selector: 'view-doctor-footer',
	templateUrl: './view-doctor-footer.component.html',
	styleUrls: ['./view-doctor-footer.component.scss'],
})
export class ViewDoctorFooterComponent implements OnInit {
	constructor(private modalService: ModalService) {
		this.modalService
			.getConfirmModalValue()
			.subscribe((value: boolean) => (this.wantsToDelete = value))
	}

	ngOnInit(): void {}

	wantsToDelete: boolean = false as boolean

	deleteDoctor() {
		this.wantsToDelete = true
	}
}
