import { Modal } from './../../models/Modal.interface'
import { Component, OnInit } from '@angular/core'
import { ModalService } from 'src/app/services/modal.service'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	constructor(private modalService: ModalService) {
		this.modalService.getModalValue().subscribe((modalData: any) => {
			this.showModal = modalData.value
		})
	}

	showModal = false
	ngOnInit(): void {}
}
