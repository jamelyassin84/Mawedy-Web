import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'right-large-modal',
	templateUrl: './right-large-modal.component.html',
	styleUrls: ['./right-large-modal.component.scss'],
})
export class RightLargeModalComponent implements OnInit {
	constructor() {}

	@Input() header: any
	@Input() body: any
	@Input() footer: any

	ngOnInit(): void {}
}
