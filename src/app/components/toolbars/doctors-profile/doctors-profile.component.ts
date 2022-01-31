import { Component, OnInit } from '@angular/core'
import { listAnimation } from 'src/app/animations/List.animation'
import { ModalService } from 'src/app/services/utilities/modal.service'

@Component({
	selector: 'toolbar-doctors-profile',
	templateUrl: './doctors-profile.component.html',
	styleUrls: ['./doctors-profile.component.scss'],
	animations: [listAnimation],
})
export class DoctorsProfileToolbarComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
