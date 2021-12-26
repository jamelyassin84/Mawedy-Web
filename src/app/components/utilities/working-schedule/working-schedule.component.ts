import { Component, OnInit } from '@angular/core'
import { workingSchedules } from 'src/app/constants/App.constants'

@Component({
	selector: 'app-working-schedule',
	templateUrl: './working-schedule.component.html',
	styleUrls: ['./working-schedule.component.scss'],
})
export class WorkingScheduleComponent implements OnInit {
	constructor() {}

	workingSchedules = workingSchedules

	ngOnInit(): void {}
}
