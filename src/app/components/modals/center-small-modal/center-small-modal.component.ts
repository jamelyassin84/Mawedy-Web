import { ModalService } from '../../../services/utilities/modal.service'
import { Component, Input, OnInit } from '@angular/core'
import { scaleX } from 'src/app/animations/scalex.animation'

@Component({
	selector: 'center-small-modal',
	templateUrl: './center-small-modal.component.html',
	styleUrls: ['./center-small-modal.component.scss'],
	animations: [scaleX],
})
export class CenterSmallModalComponent implements OnInit {
	constructor(private modalService: ModalService) {
		this.modalService.getModalValue().subscribe((modal: any) => {
			this.animationState = modal.value === true ? 'in' : 'out'
		})
	}

	ngOnInit(): void {}

	animationState: 'in' | 'out' = 'out'

	@Input() header: any

	@Input() body: any

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
