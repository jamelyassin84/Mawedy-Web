import { ComponentFixture, TestBed } from '@angular/core/testing'

import { NewAppointmentsComponent } from './new-appointments.component'

describe('NewAppointmentsComponent', () => {
	let component: NewAppointmentsComponent
	let fixture: ComponentFixture<NewAppointmentsComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [NewAppointmentsComponent],
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(NewAppointmentsComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
