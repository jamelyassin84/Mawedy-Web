import { Component, OnInit } from '@angular/core'
import { timeSlots } from 'src/app/constants/App.constants'

@Component({
	selector: 'select-time-slot-component',
	templateUrl: './select-time-slot-component.component.html',
	styleUrls: ['./select-time-slot-component.component.scss'],
})
export class SelectTimeSlotComponent implements OnInit {
	constructor() {}

	timeSlots: string[] = timeSlots

	ngOnInit(): void {}
}
