import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
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
	constructor(private router: Router) {}

	ngOnInit(): void {}
}
