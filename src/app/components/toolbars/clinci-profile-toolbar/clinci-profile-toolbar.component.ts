import { clinicTabs, ClinicTabType } from './clinic.profile.tabs'
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
	selector: 'toolbar-profile',
	templateUrl: './clinci-profile-toolbar.component.html',
	styleUrls: ['./clinci-profile-toolbar.component.scss'],
})
export class ClinicProfileToolbarComponent implements OnInit {
	constructor(private router: Router) {
		router.events.subscribe(() => this.changeTab())
	}

	tabs: ClinicTabType[] = clinicTabs

	today = Date.now()

	activeTab: number = 1

	setActiveTab(tab: ClinicTabType) {
		this.router.navigate([tab.route])
	}

	changeTab() {
		if (this.router.url.includes('information')) {
			this.activeTab = 2
		}
		if (this.router.url.includes('services')) {
			this.activeTab = 1
		}
	}

	ngOnInit(): void {
		this.changeTab()
	}
}
