import { ModalService } from 'src/app/services/modal.service'
import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'right-blur-background-modal',
	templateUrl: './right-blur-background-modal.component.html',
	styleUrls: ['./right-blur-background-modal.component.scss'],
})
export class RightBlurBackgroundModalComponent implements OnInit {
	constructor(private service: ModalService) {}

	ngOnInit(): void {}

	close() {}
}
