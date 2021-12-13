import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AppointmentTabs, AppointmentTabType } from './AppointmentsTabs'

@Component({
	selector: 'toolbar-appointments',
	templateUrl: './appointments-toolbar.component.html',
	styleUrls: ['./appointments-toolbar.component.scss'],
})
export class AppointmentsToolbarComponent implements OnInit {
	constructor(private router: Router) {}
	tabs: AppointmentTabType[] = AppointmentTabs

	today = Date.now()

	activeTab!: string

	ngOnInit(): void {
		this.activeTab = this.tabs[0].name
	}

	setActiveTab(tab: AppointmentTabType) {
		this.activeTab = tab.name
		this.router.navigate([tab.route])
	}
}
