import { DoctorService } from '../../../../services/utilities/doctor.service'
import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { listAnimation } from 'src/app/animations/List.animation'
import { Doctor } from 'src/app/models/types'
import { ROUTES } from 'src/app/routes/api.routes'
import { BaseService } from 'src/app/services/api/base.api.service'
import { ClinicService } from 'src/app/services/utilities/clnic.service'
import { ModalService } from 'src/app/services/utilities/modal.service'

@Component({
	selector: 'doctors-profile',
	templateUrl: './doctors-profile.component.html',
	styleUrls: ['./doctors-profile.component.scss'],
	animations: [listAnimation],
})
export class DoctorsProfileComponent implements OnInit {
	constructor(
		private http: HttpClient,
		private doctorService: DoctorService,
	) {}

	ngOnInit(): void {
		this.getDoctors()
	}

	doctors!: Doctor[]

	getDoctors() {
		new BaseService(this.http, ROUTES.DOCTOR).index().subscribe({
			next: (data: Doctor[]) => {
				this.doctors = data
				this.doctorService.setDoctorCount(data.length)
			},
			error: (error) => console.log(error),
		})
	}
}
