import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'app-service-card',
	templateUrl: './clinic-service-card.component.html',
	styleUrls: ['./clinic-service-card.component.scss'],
})
export class ClinicServiceCardComponent implements OnInit {
	@Input() title!: string
	@Input() description!: string
	@Input() image!: String

	constructor() {}

	ngOnInit(): void {}
}
