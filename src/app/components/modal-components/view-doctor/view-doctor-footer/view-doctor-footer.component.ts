import { Component, OnInit } from '@angular/core'
import { ModalService } from 'src/app/services/utilities/modal.service'

@Component({
	selector: 'view-doctor-footer',
	templateUrl: './view-doctor-footer.component.html',
	styleUrls: ['./view-doctor-footer.component.scss'],
})
export class ViewDoctorFooterComponent implements OnInit {
	constructor(private modalService: ModalService) {}

	ngOnInit(): void {}

	deleteDoctor() {
		this.modalService.showConfirm({
			type: 'Confirm',
			firstLine: 'Are you sure you want to delete',
			secondLine: 'Dr. Jamel Yassin?',
			onCLose: () => {},
			onSubmit: () => {},
			value: true,
		})
	}
}
