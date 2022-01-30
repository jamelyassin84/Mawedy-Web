import { Component, OnInit } from '@angular/core'
import { listAnimation } from 'src/app/animations/List.animation'

@Component({
	selector: 'patients',
	templateUrl: './patients.component.html',
	styleUrls: ['./patients.component.scss'],
	animations: [listAnimation],
})
export class PatientsComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
