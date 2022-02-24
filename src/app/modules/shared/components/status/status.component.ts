import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'app-status',
	templateUrl: './status.component.html',
	styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {
	constructor() {}

	@Input() active: boolean | 'pending' | 'canceled' | 'attended' | null = false

	ngOnInit(): void {}
}
