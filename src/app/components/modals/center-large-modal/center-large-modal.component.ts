import { Component, Input, OnInit } from '@angular/core'
import { ModalService } from 'src/app/services/utilities/modal.service'

@Component({
	selector: 'center-large-modal',
	templateUrl: './center-large-modal.component.html',
	styleUrls: ['./center-large-modal.component.scss'],
})
export class CenterLargeModalComponent implements OnInit {
	constructor(private modalService: ModalService) {}

	ngOnInit(): void {}

	@Input() animationState!: boolean

	@Input() header: any

	@Input() body: any

	@Input() footer: any

	hide() {}
}
