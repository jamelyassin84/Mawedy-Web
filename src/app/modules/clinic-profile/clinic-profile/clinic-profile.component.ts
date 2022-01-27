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
	) {}

	timings: string[] = timings

	clinic!: ClinicDto

	lat: number = 40.76
	lng: number = -73.983

	getClinic(id: number) {
		new BaseService(this.http, ROUTES.CLINICS)
			.show(id)
			.subscribe((data: ClinicDto) => (this.clinic = data))
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
	set24Hrs(value: boolean) {
		this.is24Hrs = value
	}

	isProcessing: boolean | 'complete' = false
	save() {}

	saveAvatar(id: number) {}

	markerDragEnd(m: marker | any, $event: any) {
		console.log('dragEnd', m, $event)
	}

	clickedMarker(label: string, index: number) {
		console.log(`clicked the marker: ${label || index}`)
	}

	ngOnInit(): void {
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
