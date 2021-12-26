import { Component, OnInit } from '@angular/core'
import { ModalService } from 'src/app/services/modal.service'

@Component({
	selector: 'home-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
	constructor(private modalService: ModalService) {}

	ngOnInit(): void {}

	showModal() {
		this.modalService.showModal({
			value: true,
			header: 'footer',
			body: 'footer',
			footer: 'footer',
			type: 'Right',
		})
	}
}
