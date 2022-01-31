import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-doctors-profile-body',
	templateUrl: './doctors-profile-body.component.html',
	styleUrls: ['./doctors-profile-body.component.scss'],
})
export class DoctorsProfileBodyComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	trigger(id: string): void {
		document.getElementById(id)?.click()
	}

	avatar!: File
	avatarSrc!: any
	readFile(event: any): void {
		this.avatar = event.target.files[0] as File

		const reader = new FileReader()

		reader.readAsDataURL(this.avatar)

		reader.onload = (e: any) => {
			this.avatarSrc = e.target.result
		}
	}
}
