import { Component, Input, OnInit } from '@angular/core'
import { slideLeft } from 'src/app/animations/SlideLeftAnimation'
import { ModalService } from 'src/app/services/utilities/modal.service'
@Component({
	selector: 'right-large-modal',
	templateUrl: './right-large-modal.component.html',
	styleUrls: ['./right-large-modal.component.scss'],
	animations: [slideLeft],
})
export class RightLargeModalComponent implements OnInit {
	constructor(private modalService: ModalService) {
		this.modalService.getModalValue().subscribe((modal: any) => {
			this.animationState = modal.value === true ? 'in' : 'out'
		})
	}

	ngOnInit(): void {}

	animationState: 'in' | 'out' = 'out'

	@Input() header: any

	@Input() body: any

	@Input() footer: any

	hide() {
		this.modalService.showModal({
			value: false,
			header: '',
			body: '',
			footer: '',
			type: undefined,
		})
	}
}
