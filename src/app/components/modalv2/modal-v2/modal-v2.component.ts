import { Component, OnInit, Input } from '@angular/core'
import { fadeIn } from 'src/app/animations/fade-in.animation'
import { scaleX } from 'src/app/animations/scaleX.animation'
import { slideLeft } from 'src/app/animations/SlideLeftAnimation'
import { Modal } from 'src/app/models/Modal.interface'
import { ModalType } from 'src/app/models/types'

@Component({
	selector: 'modal',
	templateUrl: './modal-v2.component.html',
	styleUrls: ['./modal-v2.component.scss'],
	animations: [slideLeft, fadeIn, scaleX],
})
export class ModalV2Component implements OnInit {
	constructor() {}

	@Input() button!: any
	@Input() title!: any
	@Input() type!: ModalType
	@Input() component!: any
	@Input() footer!: any

	isShowing = false

	ngOnInit(): void {}

	close(e: any) {
		e.stopPropagation()
		this.isShowing = false
		// do other stuff...
	}

	click() {
		this.isShowing = true
	}
}
