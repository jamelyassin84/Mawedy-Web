import { AlertService } from './../../../../services/utilities/alert.service'
import { HttpClient } from '@angular/common/http'
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { ROUTES } from 'src/app/routes/api.routes'
import { BaseService } from 'src/app/services/api/base.api.service'
import { ClinicService } from 'src/app/services/utilities/clnic.service'

@Component({
	selector: 'add-department-modal-body',
	templateUrl: './add-department-modal-body.component.html',
	styleUrls: ['./add-department-modal-body.component.scss'],
})
export class AddDepartmentModalBodyComponent implements OnInit {
	constructor(
		private http: HttpClient,
		private clinic: ClinicService,
		private alert: AlertService,
	) {}

	ngOnInit(): void {}

	ngAfterViewInit() {
		this.form.nativeElement.focus()
	}

	@ViewChild('form') form!: ElementRef

	name: string = ''

	isProcessing: boolean | 'complete' = false

	save() {
		if (this.name === '') {
			return this.alert.Fire({
				title: `Empty Field`,
				description: `Department should not be empty`,
				type: 'error',
			})
		}
		this.isProcessing = true
		new BaseService(this.http, ROUTES.CLINIC_DEPARTMENT)
			.create({ clinicId: this.clinic.getID(), name: this.name })
			.subscribe({
				complete: () => {
					setTimeout(() => {
						this.alert.Fire({
							title: `Saved!`,
							description: `new Department Added`,
							type: 'success',
						})
						this.isProcessing = 'complete'
						setTimeout(() => {
							this.form.nativeElement.focus()
							this.isProcessing = false
							this.name = ''
						}, 2700)
					}, 500)
				},
			})
	}
}
