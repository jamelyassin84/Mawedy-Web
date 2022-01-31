import { scaleX } from './../../../animations/scaleX.animation'
import { fadeIn } from './../../../animations/fade-in.animation'
import { Component, OnInit, Input } from '@angular/core'
import { slideLeft } from 'src/app/animations/SlideLeftAnimation'
import { dropDownAnim } from 'src/app/animations/dropdown.animation'
import { DropdownService } from 'src/app/services/utilities/dropdown.service'

@Component({
	selector: 'dropdown-sm',
	templateUrl: './dropdown-sm.component.html',
	styleUrls: ['./dropdown-sm.component.scss'],
	animations: [slideLeft, fadeIn, scaleX, dropDownAnim],
})
export class DropdownSmComponent implements OnInit {
	constructor(private service: DropdownService) {
		this.service
			.getShowValue()
			.subscribe((value: boolean) => (this.isShowing = value))
	}

	@Input() component: any
	@Input() button: any

	isShowing: boolean = false

	ngOnInit(): void {}

	toggleShow() {
		this.isShowing = this.isShowing ? false : true
	}
}
