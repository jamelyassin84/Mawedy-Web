import { scaleX } from './../../../animations/scaleX.animation'
import { fadeIn } from './../../../animations/fade-in.animation'
import { slideLeft } from 'src/app/animations/SlideLeftAnimation'
import { Component, Input, OnInit } from '@angular/core'
import { dropDownAnim } from 'src/app/animations/dropdown.animation'

@Component({
	selector: 'dropdown-lg',
	templateUrl: './dropdown-lg.component.html',
	styleUrls: ['./dropdown-lg.component.scss'],
	animations: [slideLeft, fadeIn, scaleX, dropDownAnim],
})
export class DropdownLgComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	@Input() component: any

	@Input() button: any

	@Input() dropdownTitle!: string

	@Input() badge!: number

	isShowing: boolean = false

	toggleShow() {
		this.isShowing = this.isShowing ? false : true
	}
}
