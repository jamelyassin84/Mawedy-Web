import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
	selector: 'AddPatientModal',
	templateUrl: './patients-profile-modal-body.component.html',
	styleUrls: ['./patients-profile-modal-body.component.scss'],
})
export class PatientsProfileModalBodyComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	sex: 'M' | 'F' = 'M'

	type = 'Walk-in'

	form = new FormGroup({
		first: new FormControl('', [Validators.required, Validators.minLength(3)]),

		middle: new FormControl('', [Validators.required, Validators.minLength(5)]),

		last: new FormControl('', [Validators.required, Validators.minLength(5)]),

		ext: new FormControl('', [Validators.required, Validators.minLength(5)]),

		address: new FormControl('', [Validators.required, Validators.minLength(5)]),

		sex: new FormControl('', [Validators.required, Validators.minLength(5)]),

		religion: new FormControl('', [Validators.required, Validators.minLength(5)]),

		dob: new FormControl('', [Validators.required, Validators.minLength(5)]),

		city: new FormControl('', [Validators.required, Validators.minLength(5)]),

		country: new FormControl('', [Validators.required, Validators.minLength(5)]),

		phone: new FormControl('', [Validators.required, Validators.minLength(5)]),

		email: new FormControl('', [Validators.required, Validators.minLength(5)]),
	})

	setSex(sex: 'M' | 'F') {
		this.sex = sex
	}

	save() {
		const data = Object.assign({ type: this.type, sex: this.sex }, this.form)
	}
}
