import { ModalService } from '../../../services/utilities/modal.service'
import { Component, OnInit } from '@angular/core'
import { timeSlots } from 'src/app/constants/App.constants'

@Component({
	selector: 'select-time-slot-component',
	templateUrl: './select-time-slot-component.component.html',
	styleUrls: ['./select-time-slot-component.component.scss'],
})
export class SelectTimeSlotComponent implements OnInit {
	constructor(protected modalService: ModalService) {}

	timeSlots: string[] = timeSlots

	ngOnInit(): void {}

	cancel() {
		this.modalService.showModal({
			value: false,
			header: '',
			body: '',
			footer: '',
			type: 'Right Blur',
		})
	}
}
