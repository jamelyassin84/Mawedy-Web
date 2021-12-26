import { ComponentFixture, TestBed } from '@angular/core/testing'

import { NewAppointmentModalBodyComponent } from './new-appointment-modal-body.component'

describe('NewAppointmentModalBodyComponent', () => {
	let component: NewAppointmentModalBodyComponent
	let fixture: ComponentFixture<NewAppointmentModalBodyComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [NewAppointmentModalBodyComponent],
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(NewAppointmentModalBodyComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
