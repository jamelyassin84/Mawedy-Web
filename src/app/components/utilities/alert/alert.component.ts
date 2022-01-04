import { AlertService } from './../../../services/utilities/alert.service'
import { Alert, AlertType } from './../../../models/Alert.type'
import { Component, Input, OnInit } from '@angular/core'
import { SlideInTop } from 'src/app/animations/SlideInTop'

@Component({
	selector: 'app-alert',
	templateUrl: './alert.component.html',
	styleUrls: ['./alert.component.scss'],
	animations: SlideInTop(),
})
export class AlertComponent implements OnInit {
	constructor(private service: AlertService) {
		this.service.listen().subscribe((data: Alert | undefined) => {
			this.title = data?.title as string
			this.description = data?.description as string
			this.callback = data?.callback as Function
			this.type = data?.type as AlertType
			this.isShowing = data?.isShowing as boolean
		})
	}

	title: string = 'test'
	description: string = 'test'
	callback: Function | any
	type: AlertType = 'info'
	isShowing = false

	timer: any
	ngOnInit(): void {
		this.timer = setTimeout(() => {
			this.isShowing = false
		}, 5000)
	}

	close() {
		this.isShowing = false
	}

	ngOnDestroy(): void {
		clearInterval(this.timer)
	}
}
