import { ModalService } from '../../../services/utilities/modal.service'
import { Component, Input, OnInit } from '@angular/core'
import { scaleX } from 'src/app/animations/scaleX.animation'

@Component({
	selector: 'center-small-modal',
	templateUrl: './center-small-modal.component.html',
	styleUrls: ['./center-small-modal.component.scss'],
	animations: [scaleX],
})
export class CenterSmallModalComponent implements OnInit {
	constructor(private modalService: ModalService) {}

	ngOnInit(): void {}

	@Input() animationState!: boolean

	@Input() header: any

	@Input() body: any

	hide() {}
}
