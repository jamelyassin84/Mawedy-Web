import { Component, OnInit } from '@angular/core'
import { weeklyTimesAM, weeklyTimesPM } from 'src/app/constants/App.constants'

@Component({
	selector: 'appointments-appointments-day',
	templateUrl: './appointments-day.component.html',
	styleUrls: ['./appointments-day.component.scss'],
})
export class AppointmentsDayComponent implements OnInit {
	constructor() {}

	weeklyTimesAM: number[] = weeklyTimesAM

	weeklyTimesPM: number[] = weeklyTimesPM

	now: any = new Date().getHours()

	timer: any

	ngOnInit(): void {
		this.timer = setInterval(() => {
			this.now = new Date().getHours()
		}, 1)
	}

	ngOnDestroy(): void {
		clearInterval(this.timer)
	}
}
