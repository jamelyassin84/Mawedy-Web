import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Clinic } from 'src/app/models/types'
import { ROUTES } from 'src/app/routes/api.routes'
import { BaseService } from 'src/app/services/api/base.api.service'
import { ClinicService } from 'src/app/services/utilities/clnic.service'
import { SidebarNav, SidebarNavType } from './SidebarNavs'

@Component({
	selector: 'home-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
	nav: SidebarNavType[] = SidebarNav
	constructor(
		private router: Router,
		private http: HttpClient,
		private clinicService: ClinicService,
	) {}

	activeIcon!: string

	handleChangeTab(url: string) {
		this.activeIcon = this.nav.filter((nav: SidebarNavType) => {
			return url.includes(nav.route)
		})[0].name
	}

	setActiveIcon(nav: string) {
		this.activeIcon = nav
	}

	banner = ''
	getClinic() {
		new BaseService(this.http, ROUTES.CLINICS)
			.show(this.clinicService.getID())
			.subscribe((data: Clinic) => {
				if (data.photos.length !== 0) {
					this.banner = data.photos[0].avatar
				}
			})
	}

	ngOnInit(): void {
		this.getClinic()
		this.router.url === '/home/clinic-profile'
			? this.setActiveIcon('Clinic Profile')
			: this.setActiveIcon('Dashboard')
	}
}
