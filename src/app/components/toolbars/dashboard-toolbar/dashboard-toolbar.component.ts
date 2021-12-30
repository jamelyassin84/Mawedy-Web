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

	activeTab: number = 1

	ngOnInit(): void {}

	setActiveTab(tab: AppointmentTabType) {
		this.activeTab = tab.id
		this.router.navigate([tab.route])
	}
}
