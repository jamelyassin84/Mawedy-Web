import { NavigationEnd, Router } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { CalendarTabs, CalendarTabType } from './AppointmentTab'

@Component({
	selector: 'appointment-toolbar-tabs',
	templateUrl: './appointment-toolbar-tab.component.html',
	styleUrls: ['./appointment-toolbar-tab.component.scss'],
})
export class AppointmentToolbarTabComponent implements OnInit {
	constructor(private router: Router) {
		router.events.subscribe(() => this.changeTab())
	}

	ngOnInit(): void {
		this.changeTab()
	}

	tabs: CalendarTabType[] = CalendarTabs as CalendarTabType[]
	activeTab: number | any = 1

	setActiveTab(tab: CalendarTabType) {
		this.router.navigate([tab.route])
	}

	changeTab() {
		if (this.router.url.includes('month')) {
			this.activeTab = 1
		}
		if (this.router.url.includes('week')) {
			this.activeTab = 2
		}
		if (this.router.url.includes('day')) {
			this.activeTab = 3
		}
	}
}
