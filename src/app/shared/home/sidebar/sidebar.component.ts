import { Component, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { filter } from 'rxjs'
import { SidebarNav, SidebarNavType } from './SidebarNavs'

@Component({
	selector: 'home-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
	nav: SidebarNavType[] = SidebarNav
	constructor(private router: Router) {
		router.events
			.pipe(filter((event) => event instanceof NavigationEnd))
			.subscribe((event: any) => {
				this.handleChangeTab(event?.url)
			})
	}

	activeIcon!: string

	ngOnInit(): void {
		this.router.url === '/home/clinic-profile'
			? this.setActiveIcon('Clinic Profile')
			: this.setActiveIcon('Dashboard')
	}

	handleChangeTab(url: string) {
		this.activeIcon = this.nav.filter((nav: SidebarNavType) => {
			return url.includes(nav.route)
		})[0].name
	}

	setActiveIcon(nav: string) {
		this.activeIcon = nav
	}
}
