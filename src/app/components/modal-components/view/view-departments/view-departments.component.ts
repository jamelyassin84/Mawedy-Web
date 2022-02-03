import { ModalService } from 'src/app/services/utilities/modal.service'
import { DepartmentService } from '../../../../services/components/department.service'
import { Fire } from 'src/app/constants/Alert'
import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { Department } from 'src/app/models/types'
import { ROUTES } from 'src/app/routes/api.routes'
import { BaseService } from 'src/app/services/api/base.api.service'
import { ClinicService } from 'src/app/services/utilities/clnic.service'
import { AlertService } from 'src/app/services/utilities/alert.service'
import { CurrentDepartmentService } from 'src/app/services/utilities/department.service'

@Component({
	selector: 'view-departments',
	templateUrl: './view-departments.component.html',
	styleUrls: ['./view-departments.component.scss'],
})
export class ViewDepartmentsComponent implements OnInit {
	constructor(
		private clinic: ClinicService,
		private http: HttpClient,
		private departmentService: DepartmentService,
		private currentDepartment: CurrentDepartmentService,
		private alert: AlertService,
		private modalService: ModalService,
	) {
		this.departmentService.getDepartments().subscribe((data) => {
			this.departments = data
		})
	}

	ngOnInit(): void {
		this.getDepartments()
	}

	departments!: Department[]
	getDepartments() {
		new BaseService(this.http, `${ROUTES.CLINIC_DEPARTMENT}/clinic`)
			.show(this.clinic.getID())
			.subscribe({
				next: (data: Department[]) => {
					this.departments = data
					this.departmentService.setDepartment(data)
				},
			})
	}

	showDepartment(department: Department) {
		this.currentDepartment.setDepartment(department.id as number)
		this.modalService.showModal(false)
	}

	removeDepartment(id: any) {
		Fire(
			'Remove Department',
			'Are you sure you want to remove the department?',
			'question',
			() => {
				new BaseService(this.http, ROUTES.CLINIC_DEPARTMENT).destroy(id).subscribe({
					next: () => {
						this.getDepartments()
						this.alert.Fire({
							title: 'Removed',
							description: 'Department has been removed',
							type: 'info',
						})
					},
				})
			},
		)
	}
}
