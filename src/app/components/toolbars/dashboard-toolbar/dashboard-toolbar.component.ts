import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import {
	AppointmentTabs,
	AppointmentTabType,
} from '../dashboard-toolbar/AppointmentsTabs'

@Component({
	selector: 'toolbar-dashboard',
	templateUrl: './dashboard-toolbar.component.html',
	styleUrls: ['./dashboard-toolbar.component.scss'],
})
export class DashboardToolbarComponent implements OnInit {
	constructor(private router: Router) {
		router.events.subscribe(() => this.changeTab())
	}
	tabs: AppointmentTabType[] = AppointmentTabs

	today = Date.now()

	activeTab: number = 1

	ngOnInit(): void {
		this.changeTab()
	}

	setActiveTab(tab: AppointmentTabType) {
		this.router.navigate([tab.route])
	}

	changeTab() {
		if (this.router.url.includes('appointments')) {
			this.activeTab = 1
		}
		if (this.router.url.includes('patient-outreach')) {
			this.activeTab = 2
		}
	}
}
