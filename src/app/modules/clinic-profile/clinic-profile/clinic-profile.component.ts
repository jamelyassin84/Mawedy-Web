import { marker } from './../../../models/types'
import { AlertService } from './../../../services/utilities/alert.service'
import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { timings } from 'src/app/constants/App.constants'
import { ClinicDto } from 'src/app/models/clinic.type'
import { ROUTES } from 'src/app/routes/api.routes'
import { BaseService } from 'src/app/services/api/base.api.service'
import { ClinicService } from 'src/app/services/utilities/clnic.service'
import { GeoLocationService } from 'src/app/services/utilities/geolocation.service'
@Component({
	selector: 'clinic-profile-index',
	templateUrl: './clinic-profile.component.html',
	styleUrls: ['./clinic-profile.component.scss'],
})
export class ClinicProfileComponent implements OnInit {
	constructor(
		private geoLocationService: GeoLocationService,
		private service: ClinicService,
		private http: HttpClient,
		private alert: AlertService,
	) {}

	ngOnInit(): void {
		this.timings.forEach((day: string) => {
			this.clinicTimings.push({
				openedAt: '00:00AM',
				closedAt: '00:00PM',
				day: day,
				isAlwaysOpen: false,
			})
		})

		this.getClinic(this.service.getID())

		this.geoLocationService.getPosition().subscribe((pos: any) => {
			;(this.lat = +pos.coords.latitude), (this.lng = +pos.coords.longitude)
		})
	}

	timings: string[] = timings

	lat: number = 40.76

	lng: number = -73.983

	files!: File[]

	bannerSrc!: any

	file!: File | any

	logoSrc!: any

	is24Hrs: boolean = false

	clinic!: ClinicDto

	isProcessing: boolean | 'complete' = false

	clinicTimings: any = []

	getClinic(id: number): void {
		new BaseService(this.http, ROUTES.CLINICS)
			.show(id)
			.subscribe((data: ClinicDto) => {
				this.clinic = data

				if (this.clinic.clinicTimings.length !== 0) {
					this.clinicTimings = this.clinic.clinicTimings

					this.is24Hrs = this.checkTimings(this.clinic.clinicTimings)
				}
				if (data.avatar !== null) {
					this.logoSrc = data.avatar?.avatar
				}
			})
	}

	checkTimings(timings: any): boolean {
		for (let timing of timings) {
			if (timing['isAlwaysOpen'] === true) {
				return true
			}
		}
		return false
	}

	markerDragEnd(m: marker | any, $event: any): void {}

	clickedMarker(label: string, index: number): void {}

	trigger(id: string): void {
		document.getElementById(id)?.click()
	}

	readFiles(event: any): void {
		this.files = event.target.files as File[]

		this.savePhotos()
	}

	readFile(event: any): void {
		this.file = event.target.files[0] as File

		const reader = new FileReader()

		reader.readAsDataURL(this.file)

		reader.onload = (e: any) => {
			this.logoSrc = e.target.result
		}

		this.saveAvatar()
	}

	set24Hrs(value: boolean): void {
		this.is24Hrs = value

		if (value === true) {
			for (let timing of this.clinicTimings) {
				timing['isAlwaysOpen'] = true
			}
		} else {
			for (let timing of this.clinicTimings) {
				timing['isAlwaysOpen'] = false
			}
		}
	}

	save(): void {
		this.isProcessing = true

		this.clinic['clinicTimings'] = this.clinicTimings

		new BaseService(this.http, ROUTES.CLINICS)
			.update(this.clinic.id, this.clinic)
			.subscribe({
				complete: () => {
					setTimeout(() => {
						this.alert.Fire({
							title: `Saved Successfully`,
							description: `Profile has been updated`,
							type: 'success',
						})

						this.isProcessing = 'complete'

						this.getClinic(this.clinic.id)

						setTimeout(() => (this.isProcessing = false), 2700)
					}, 500)
				},
			})
	}

	saveAvatar(): void {
		if (!this.file) {
			return
		}

		let form = new FormData()

		form.append('avatar', this.file, this.file.name)

		form.append('id', this.clinic?.id + '')

		new BaseService(this.http, `${ROUTES.CLINIC_AVATARS}/upload`)
			.create(form)
			.subscribe({
				complete: () => {
					this.alert.Fire({
						title: `Logo Uploaded`,
						description: `Logo has been updated`,
						type: 'success',
					})

					location.reload()
				},
			})
	}

	savePhotos(): void {
		if (this.files.length === 0) {
			return
		}

		let form = new FormData()

		for (let file of this.files) {
			form.append('photos', file, file.name)
		}

		form.append('id', this.clinic?.id + '')

		new BaseService(this.http, `${ROUTES.CLINIC_PHOTOS}/upload`)
			.create(form)
			.subscribe({
				complete: () => {
					this.alert.Fire({
						title: `Banners Uploaded`,
						description: `Banners has been updated`,
						type: 'success',
					})

					location.reload()
				},
			})
	}
}
