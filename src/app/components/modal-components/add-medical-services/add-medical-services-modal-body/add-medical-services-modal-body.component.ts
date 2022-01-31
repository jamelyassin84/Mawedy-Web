import { listAnimation } from './../../../../animations/List.animation'
import { Component, Input, OnInit } from '@angular/core'
import { Department } from 'src/app/models/types'

@Component({
	selector: 'add-medical-services-modal-body',
	templateUrl: './add-medical-services-modal-body.component.html',
	styleUrls: ['./add-medical-services-modal-body.component.scss'],
	animations: [listAnimation],
})
export class AddMedicalServicesModalBodyComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	files!: File[]

	@Input() department!: Department

	trigger(id: string): void {
		document.getElementById(id)?.click()
	}

	readFiles(event: any): void {
		this.files = event.target.files as File[]
	}
}
