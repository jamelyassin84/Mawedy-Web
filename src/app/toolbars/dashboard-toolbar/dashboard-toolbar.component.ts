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
	constructor(private router: Router) {}
	tabs: AppointmentTabType[] = AppointmentTabs

	today = Date.now()

	activeTab!: string

	ngOnInit(): void {
		this.activeTab = this.tabs[0].name
	}

	setActiveTab(tab: AppointmentTabType) {
		this.router.navigate([tab.route])
		this.activeTab = tab.name
	}
}
