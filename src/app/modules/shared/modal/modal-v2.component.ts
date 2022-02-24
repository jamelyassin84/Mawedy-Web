import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core'
import { fadeIn } from 'src/app/animations/fade-in.animation'
import { scaleX } from 'src/app/animations/scaleX.animation'
import { slideTop } from 'src/app/animations/SlideInTop'
import { slideLeft } from 'src/app/animations/SlideLeftAnimation'
import { ModalType } from 'src/app/models/types'
import { ModalService } from 'src/app/services/utilities/modal.service'

@Component({
	selector: 'modal',
	templateUrl: './modal-v2.component.html',
	styleUrls: ['./modal-v2.component.scss'],
	animations: [slideLeft, fadeIn, scaleX, slideTop],
})
export class ModalV2Component implements OnInit {
	constructor(
		private service: ModalService,
		private cdref: ChangeDetectorRef,
	) {
		this.service
			.getModalValue()
			.subscribe((value) => (this.isShowing = value))
	}

	ngAfterContentChecked() {
		this.cdref.detectChanges()
		this.ready = true
	}

	ready = false

	@Input() button!: any
	@Input() title!: any
	@Input() type!: ModalType
	@Input() component!: any
	@Input() footer!: any

	isShowing: boolean = false
	ngOnChanges() {
		if (this.isShowing === false) {
			this.ready = false
		}
	}

	ngOnInit(): void {}

	close(e: any) {
		e.stopPropagation()
		this.isShowing = false
	}

	click() {
		this.isShowing = true
	}
}
