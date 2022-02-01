import { Component, HostListener, OnInit } from '@angular/core'
import { DropdownService } from 'src/app/services/utilities/dropdown.service'
import { ModalService } from 'src/app/services/utilities/modal.service'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	constructor(
		private service: DropdownService,
		private modalService: ModalService,
	) {}

	ngOnInit(): void {
		this.checkIfHasUserAccount()
	}

	shouldChooseAccount: boolean = true

	checkIfHasUserAccount() {
		if (localStorage.getItem('account') !== null) {
			this.shouldChooseAccount = false
		}
	}

	closeDropDown() {
		this.service.setShowing(false)
	}

	@HostListener('document:keydown.escape', ['$event']) onKeydownHandler(
		event: KeyboardEvent,
	) {
		this.closeDropDown()
		this.modalService.showModal(false)
	}
}
