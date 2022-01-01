import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'calendar-badge-month',
	templateUrl: './calendar-badge-month.component.html',
	styleUrls: ['./calendar-badge-month.component.scss'],
})
export class CalendarBadgeMonthComponent implements OnInit {
	constructor() {}
	@Input() type: string = 'Phone'
	ngOnInit(): void {}
}
