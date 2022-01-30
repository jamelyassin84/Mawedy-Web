import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'file-upload-modal',
	templateUrl: './file-upload-modal.component.html',
	styleUrls: ['./file-upload-modal.component.scss'],
})
export class FileUploadModalComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
	@Input() animationState!: boolean
}
