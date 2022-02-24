import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'calendar-badge-day',
	templateUrl: './calendar-badge-day.component.html',
	styleUrls: ['./calendar-badge-day.component.scss'],
})
export class CalendarBadgeDayComponent implements OnInit {
	constructor() {}

	@Input() doctor: string = ''
	@Input() appointment: string = ''

	ngOnInit(): void {}
}
