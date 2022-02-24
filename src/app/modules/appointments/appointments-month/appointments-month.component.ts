import { Component, OnInit } from '@angular/core'
import { weekDays, weekDaysShort } from 'src/app/core/constants/App.constants'
import { AppointmentService } from 'src/app/services/toolbars/appointment.service'

@Component({
	selector: 'appointments-appointments-month',
	templateUrl: './appointments-month.component.html',
	styleUrls: ['./appointments-month.component.scss'],
})
export class AppointmentsMonthComponent implements OnInit {
	constructor(private appointmentService: AppointmentService) {
		this.appointmentService
			.getDate()
			.subscribe((date: number) => this.setCalendarDays(new Date(date)))
	}

	weekdays: string[] = weekDaysShort

	previousDays: number[] = []
	days: number[] = []
	afterDays: number[] = []

	today = new Date(Date.now()).getDate()

	ngOnInit(): void {
		this.setCalendarDays(new Date())
	}

	setCalendarDays(date: Date | any) {
		this.clearCalendar()

		const weekDay = date.getDay()

		// Last Month
		const previousLastDayOfTheMonth: 30 | 31 | number = new Date(
			date.getFullYear(),
			date.getMonth(),
			0,
		).getDate()
		for (let x = weekDay; x > 0; x--) {
			this.previousDays.push(previousLastDayOfTheMonth - x + 1)
		}

		// This Month
		const lastDayOfTheMonth: 30 | 31 | number = new Date(
			date.getFullYear(),
			date.getMonth() + 1,
			0,
		).getDate()
		for (let day = 1; day < lastDayOfTheMonth + 1; day++) {
			this.days.push(day)
		}

		// Next Month
		const lastDayWeekDay: number = new Date(
			date.getFullYear(),
			date.getMonth() + 1,
			0,
		).getDay()
		for (let x = 1; x <= 7 - lastDayWeekDay; x++) {
			this.afterDays.push(x)
		}
	}

	clearCalendar() {
		this.previousDays = []
		this.days = []
		this.afterDays = []
	}
}
