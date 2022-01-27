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
		private service: ClinicService,
		private http: HttpClient,
		private geoLocationService: GeoLocationService,
		private alert: AlertService,
	) {}

	timings: string[] = timings

	lat: number = 40.76
	lng: number = -73.983

	getClinic(id: number) {
		new BaseService(this.http, ROUTES.CLINICS)
			.show(id)
			.subscribe((data: ClinicDto) => {
				this.clinic = data
				if (this.clinic.clinicTimings.lenth !== 0) {
					this.clinicTimings = this.clinic.clinicTimings
					this.is24Hrs = this.checkTimings(this.clinic.clinicTimings)
				}
			})
	}

	checkTimings(timings: any) {
		for (let timing of timings) {
			if (timing['isAlwaysOpen'] === true) {
				return true
			}
		}
		return false
	}

	trigger(id: any) {
		document.getElementById(id)?.click()
	}

	filename!: string
	file!: File
	src!: any
	readFile(event: any) {
		this.file = event.target.files[0] as File
		const reader = new FileReader()
		reader.readAsDataURL(this.file)
		reader.onload = (e: any) => {
			this.src = e.target.result
		}
	}

	is24Hrs: boolean = false
	clinic!: ClinicDto
	set24Hrs(value: boolean) {
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

	isProcessing: boolean | 'complete' = false
	clinicTimings: any = []
	save() {
		this.isProcessing = true
		this.clinic['clinicTimings'] = this.clinicTimings
		new BaseService(this.http, ROUTES.CLINICS)
			.update(this.clinic.id, this.clinic)
			.subscribe({
				complete: () => {
					setTimeout(() => {
						this.alert.Fire({
							title: `Saved Successfully`,
							description: `${this.clinic.name}'s profile has been updated`,
							type: 'success',
						})
						this.isProcessing = 'complete'
						this.getClinic(this.clinic.id)
						setTimeout(() => (this.isProcessing = false), 2700)
					}, 500)
				},
			})
	}

	saveAvatar(id: number) {}

	markerDragEnd(m: marker | any, $event: any) {
		console.log('dragEnd', m, $event)
	}

	clickedMarker(label: string, index: number) {
		console.log(`clicked the marker: ${label || index}`)
	}

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
			;(this.lat = +pos.coords.latitude),
				(this.lng = +pos.coords.longitude)
		})
	}
}

interface marker {
	lat: number
	lng: number
	label?: string
}
