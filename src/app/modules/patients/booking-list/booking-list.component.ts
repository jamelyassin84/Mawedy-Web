import { Component, OnInit } from '@angular/core'
import { listAnimation } from 'src/app/animations/List.animation'

@Component({
	selector: 'patients-booking-list',
	templateUrl: './booking-list.component.html',
	styleUrls: ['./booking-list.component.scss'],
	animations: [listAnimation],
})
export class BookingListComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
