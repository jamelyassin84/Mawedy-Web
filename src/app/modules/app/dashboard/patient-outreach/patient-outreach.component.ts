import { Component, OnInit } from '@angular/core'
import { listAnimation } from 'src/app/animations/List.animation'

@Component({
	selector: 'dashboard-patient-outreach',
	templateUrl: './patient-outreach.component.html',
	styleUrls: ['./patient-outreach.component.scss'],
	animations: [listAnimation],
})
export class PatientOutreachComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
