import { Component, OnInit } from '@angular/core'
import { SidebarNav, SidebarNavType } from './SidebarNavs'

@Component({
	selector: 'home-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
	nav: SidebarNavType[] = SidebarNav
	constructor() {}

	activeIcon!: string

	ngOnInit(): void {
		this.activeIcon = this.nav[0].name
	}

	setActiveIcon(nav: string) {
		this.activeIcon = nav
	}
}
