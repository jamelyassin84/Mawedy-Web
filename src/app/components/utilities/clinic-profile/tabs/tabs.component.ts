import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
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
