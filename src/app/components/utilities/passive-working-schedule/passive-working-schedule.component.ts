import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'passive-working-schedule',
	templateUrl: './passive-working-schedule.component.html',
	styleUrls: ['./passive-working-schedule.component.scss'],
})
export class PassiveWorkingScheduleComponent implements OnInit {
	constructor() {}

	@Input() Mon: boolean = false
	@Input() Tue: boolean = false
	@Input() Wed: boolean = false
	@Input() Thu: boolean = false
	@Input() Fri: boolean = false
	@Input() Sat: boolean = false
	@Input() Sun: boolean = false

	ngOnInit(): void {}
}
