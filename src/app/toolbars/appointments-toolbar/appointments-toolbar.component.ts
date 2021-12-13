import { Component, OnInit } from '@angular/core'
import { AppointmentTabs } from './AppointmentsTabs'

@Component({
	selector: 'toolbar-appointments',
	templateUrl: './appointments-toolbar.component.html',
	styleUrls: ['./appointments-toolbar.component.scss'],
})
export class AppointmentsToolbarComponent implements OnInit {
	tabs: string[] = AppointmentTabs

	constructor() {}

	activeTab!: string

	ngOnInit(): void {
		this.activeTab = this.tabs[0]
	}

	setActiveTab(tab: string) {
		this.activeTab = tab
	}
}
