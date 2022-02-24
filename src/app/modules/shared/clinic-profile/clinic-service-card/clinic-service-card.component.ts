import { Component, Input, OnInit } from '@angular/core'
import { ClinicMedicalService, Department } from 'src/app/models/types'

@Component({
	selector: 'MedicalServiceCard',
	templateUrl: './clinic-service-card.component.html',
	styleUrls: ['./clinic-service-card.component.scss'],
})
export class ClinicServiceCardComponent implements OnInit {
	@Input() title!: string
	@Input() description!: string
	@Input() image!: String
	@Input() available!: boolean

	@Input() service!: ClinicMedicalService
	@Input() department!: Department

	constructor() {}

	ngOnInit(): void {}
}
