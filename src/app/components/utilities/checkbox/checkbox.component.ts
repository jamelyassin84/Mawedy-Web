import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
	selector: 'app-checkbox',
	templateUrl: './checkbox.component.html',
	styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {
	constructor() {}
	@Output() onCheck = new EventEmitter<boolean>()

	@Input() checked: boolean = false
	@Input() alt: boolean = false

	check() {
		this.checked = this.checked ? false : true
		this.onCheck.emit(this.checked)
	}
	ngOnInit(): void {}
}
