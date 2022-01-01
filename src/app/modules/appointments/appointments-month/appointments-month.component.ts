import { Component, OnInit } from '@angular/core'
import { weekDays, weekDaysShort } from 'src/app/constants/App.constants'

@Component({
	selector: 'appointments-appointments-month',
	templateUrl: './appointments-month.component.html',
	styleUrls: ['./appointments-month.component.scss'],
})
export class AppointmentsMonthComponent implements OnInit {
	constructor() {}

	weekdays: string[] = weekDaysShort

	days: number[] = []

	today = new Date(Date.now()).getDate()

	ngOnInit(): void {
		for (let day = 1; day < 31 + 1; day++) {
			this.days.push(day)
		}
	}
}
