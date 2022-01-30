import { Component, Input, OnInit } from '@angular/core'
import { ModalService } from 'src/app/services/utilities/modal.service'

@Component({
	selector: 'right-blur-background-modal',
	templateUrl: './right-blur-background-modal.component.html',
	styleUrls: ['./right-blur-background-modal.component.scss'],
})
export class RightBlurBackgroundModalComponent implements OnInit {
	constructor(private service: ModalService) {}

	ngOnInit(): void {}

	@Input() body: any
	@Input() animationState!: boolean
}
