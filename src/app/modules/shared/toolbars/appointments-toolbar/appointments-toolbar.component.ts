import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AppointmentService } from 'src/app/services/toolbars/appointment.service'
import {
	AppointmentTabs,
	AppointmentTabType,
} from '../dashboard-toolbar/AppointmentsTabs'

@Component({
	selector: 'toolbar-appointments',
	templateUrl: './appointments-toolbar.component.html',
	styleUrls: ['./appointments-toolbar.component.scss'],
})
export class AppointmentsToolbarComponent implements OnInit {
	constructor(private appointmentService: AppointmentService) {}

	today = Date.now()

	currentMonth = new Date(Date.now())

	now: Date = new Date()
	timer: any
	ngOnInit(): void {
		this.timer = setInterval(() => {
			this.now = new Date()
		}, 1)
	}

	ngOnDestroy(): void {
		clearInterval(this.timer)
	}

	next() {
		this.today = this.currentMonth.setMonth(
			this.currentMonth.getMonth() + 1,
		)
		this.appointmentService.setDate(this.today)
	}

	prev() {
		this.today = this.currentMonth.setMonth(
			this.currentMonth.getMonth() - 1,
		)
		this.appointmentService.setDate(this.today)
	}
}
