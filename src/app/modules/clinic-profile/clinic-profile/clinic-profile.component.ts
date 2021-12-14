import { Component, OnInit } from '@angular/core'
import { timings } from 'src/app/constants/App.constants'

@Component({
	selector: 'clinic-profile-index',
	templateUrl: './clinic-profile.component.html',
	styleUrls: ['./clinic-profile.component.scss'],
})
export class ClinicProfileComponent implements OnInit {
	timings: string[] = timings
	constructor() {}

	ngOnInit(): void {}
}
