import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'home-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
	constructor() {}

	@Input() component: any

	ngOnInit(): void {}
}
