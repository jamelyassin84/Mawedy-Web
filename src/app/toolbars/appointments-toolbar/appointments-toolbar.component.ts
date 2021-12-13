import { Component, OnInit } from '@angular/core'
import { AppointmentTabs, AppointmentTabType } from './AppointmentsTabs'

@Component({
	selector: 'toolbar-appointments',
	templateUrl: './appointments-toolbar.component.html',
	styleUrls: ['./appointments-toolbar.component.scss'],
})
export class AppointmentsToolbarComponent implements OnInit {
	tabs: AppointmentTabType[] = AppointmentTabs

	constructor() {}

	activeTab!: string

	ngOnInit(): void {
		this.activeTab = this.tabs[0].name
	}

	setActiveTab(tab: AppointmentTabType) {
		this.activeTab = tab.name
	}
}
