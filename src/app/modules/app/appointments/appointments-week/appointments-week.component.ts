import {
	weekDaysShort,
	weeklyTimesAM,
	weeklyTimesPM,
} from 'src/app/core/constants/App.constants'
import { Component, OnInit } from '@angular/core'
import { AppointmentService } from 'src/app/services/toolbars/appointment.service'

@Component({
	selector: 'appointments-appointments-week',
	templateUrl: './appointments-week.component.html',
	styleUrls: ['./appointments-week.component.scss'],
})
export class AppointmentsWeekComponent implements OnInit {
	constructor(private appointmentService: AppointmentService) {}

	weekdays: string[] = weekDaysShort

	weeklyTimesAM: number[] = weeklyTimesAM

	weeklyTimesPM: number[] = weeklyTimesPM

	days: number[] = []

	today: any = new Date(Date.now()).getDate()

	now: any = new Date().getHours()

	timer: any

	ngOnInit(): void {
		this.setWeeklyAppointments(new Date())

		this.timer = setInterval(() => {
			this.now = new Date().getHours()
		}, 1)
	}

	ngOnDestroy(): void {
		clearInterval(this.timer)
	}

	setWeeklyAppointments(date: Date | any) {
		this.clearCalendar()

		const milliseconds = 24 * 60 * 60 * 1000

		const monday = new Date(
			date.getTime() - (date.getDay() - 1) * milliseconds,
		)

		const sunday = new Date(monday.getTime() + 6 * milliseconds)

		this.days.push(monday.getDate() - 1)

		for (let i = 0; i < 5; i++) {
			this.days.push(
				new Date(monday.getTime() + i * milliseconds).getDate(),
			)
		}

		this.days.push(sunday.getDate())
	}

	clearCalendar() {
		this.days = []
	}
}
