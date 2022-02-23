import { HttpClient } from '@angular/common/http'
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { listAnimation } from 'src/app/animations/List.animation'
import { Fire } from 'src/app/constants/Alert'
import { Department } from 'src/app/models/types'
import { ROUTES } from 'src/app/routes/api.routes'
import { BaseService } from 'src/app/services/api/base.api.service'
import { AlertService } from 'src/app/services/utilities/alert.service'

@Component({
	selector: 'app-tabs',
	templateUrl: './tabs.component.html',
	styleUrls: ['./tabs.component.scss'],
	animations: [listAnimation],
})
export class TabsComponent implements OnInit {
	constructor(private http: HttpClient, private alert: AlertService) {}
	ngOnInit(): void {}

	@Input() tabs!: TabType[]
	@Input() currentDepartmentData!: Department
	@Input() active!: number
	@Output() OnSetActiveTab = new EventEmitter<number>()

	setActiveTab(id: any) {
		this.OnSetActiveTab.emit(id)
	}

	trigger(id: string) {
		document.getElementById(id)?.click
	}

	removeDepartment(id: any) {
		Fire(
			`Remove ${this.currentDepartmentData.name}?`,
			'Are you sure you want to remove the department?',
			'question',
			() => {
				new BaseService(this.http, ROUTES.CLINIC_DEPARTMENT)
					.destroy(id)
					.subscribe({
						next: () => {
							this.alert.Fire({
								title: 'Removed',
								description: `${this.currentDepartmentData.name} has been removed`,
								type: 'info',
							})
						},
					})
			},
		)
	}
}

export type TabType = {
	id?: number | string
	name: string
	isActive: boolean
}
