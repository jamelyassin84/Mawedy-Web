import { DepartmentService } from '../../../../services/components/department.service'
import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { listAnimation } from 'src/app/animations/List.animation'
import { TabType } from 'src/app/modules/shared/clinic-profile/tabs/tabs.component'
import { ROUTES } from 'src/app/routes/api.routes'
import { BaseService } from 'src/app/services/api/base.api.service'
import { ClinicService } from 'src/app/services/utilities/clnic.service'
import { ClinicMedicalService, Department } from 'src/app/models/types'
import { CurrentDepartmentService } from 'src/app/services/utilities/department.service'

@Component({
	selector: 'clinic-profile-services',
	templateUrl: './clinic-profile-services.component.html',
	styleUrls: ['./clinic-profile-services.component.scss'],
	animations: [listAnimation],
})
export class ClinicProfileServicesComponent implements OnInit {
	constructor(
		private http: HttpClient,
		private clinic: ClinicService,
		private departmentService: DepartmentService,
		private currentDepartment: CurrentDepartmentService,
	) {
		this.departmentService.getDepartments().subscribe((data) => {
			this.tabs = data
			if (data.length !== 0) {
				this.activeTab = data[0].id
				this.currentDepartmentData = data[0]
			}
		})

		this.currentDepartment
			.getDepartment()
			.subscribe((id: number) => this.setActiveTab(id))
	}

	services: ClinicMedicalService[] = []

	ngOnInit(): void {
		this.getDepartments()
	}

	currentDepartmentData!: Department
	getDepartments() {
		new BaseService(this.http, `${ROUTES.CLINIC_DEPARTMENT}/clinic`)
			.show(this.clinic.getID())
			.subscribe({
				next: (data) => {
					this.tabs = data
					if (data.length !== 0) {
						this.setActiveTab(data[0].id)
						this.currentDepartmentData = data[0]
					}
				},
			})
	}

	tabs: TabType[] = []
	activeTab: any = 0
	setActiveTab(id: number | string) {
		this.activeTab = id
		this.getServices(id)
		this.getDepartment(id)
	}

	getDepartment(id: number | string) {
		new BaseService(this.http, ROUTES.CLINIC_DEPARTMENT)
			.show(id)
			.subscribe((department: Department) => {
				this.currentDepartmentData = department
			})
	}

	getServices(id: number | string) {
		new BaseService(
			this.http,
			`${ROUTES.CLINIC_MEDICAL_SERVICES}/department`,
		)
			.show(id)
			.subscribe((data) => (this.services = data))
	}
}
