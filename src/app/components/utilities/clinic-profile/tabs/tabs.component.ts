import { AlertService } from '../../../../services/utilities/alert.service'
import { HttpClient } from '@angular/common/http'
import { ModalService } from '../../../../services/utilities/modal.service'
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Fire } from 'src/app/constants/Alert'
import { BaseService } from 'src/app/services/api/base.api.service'
import { ROUTES } from 'src/app/routes/api.routes'
import { listAnimation } from 'src/app/animations/List.animation'

@Component({
	selector: 'app-tabs',
	templateUrl: './tabs.component.html',
	styleUrls: ['./tabs.component.scss'],
	animations: [listAnimation],
})
export class TabsComponent implements OnInit {
	constructor() {}
	ngOnInit(): void {}

	@Input() tabs!: TabType[]
	@Input() active!: number
	@Output() OnSetActiveTab = new EventEmitter<number>()

	setActiveTab(id: any) {
		this.OnSetActiveTab.emit(id)
	}

	trigger(id: string) {
		document.getElementById(id)?.click
	}
}

export type TabType = {
	id?: number | string
	name: string
	isActive: boolean
}
