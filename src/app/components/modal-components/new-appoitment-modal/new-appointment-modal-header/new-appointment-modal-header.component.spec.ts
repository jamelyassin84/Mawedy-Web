import { ComponentFixture, TestBed } from '@angular/core/testing'

import { NewAppointmentModalHeaderComponent } from './new-appointment-modal-header.component'

describe('NewAppointmentModalHeaderComponent', () => {
	let component: NewAppointmentModalHeaderComponent
	let fixture: ComponentFixture<NewAppointmentModalHeaderComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [NewAppointmentModalHeaderComponent],
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(NewAppointmentModalHeaderComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
