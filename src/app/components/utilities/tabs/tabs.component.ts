import { ModalService } from './../../../services/utilities/modal.service'
import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'app-tabs',
	templateUrl: './tabs.component.html',
	styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
	constructor(private modalService: ModalService) {}
	ngOnInit(): void {}

	@Input() tabs!: TabType[]
	showModal(header: any, body: any, footer: any) {
		this.modalService.showModal({
			value: true,
			header: header,
			body: body,
			footer: footer,
			type: 'Center Large',
		})
	}
}

export type TabType = {
	title: string
	active: boolean
}
