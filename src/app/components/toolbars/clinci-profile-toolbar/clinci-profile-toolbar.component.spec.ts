import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ClinicProfileToolbarComponent } from './clinci-profile-toolbar.component'

describe('ClinicProfileToolbarComponent', () => {
	let component: ClinicProfileToolbarComponent
	let fixture: ComponentFixture<ClinicProfileToolbarComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ClinicProfileToolbarComponent],
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(ClinicProfileToolbarComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
