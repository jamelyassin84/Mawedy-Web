import { ComponentFixture, TestBed } from '@angular/core/testing'

import { NewAppointmentModalFooterComponent } from './new-appointment-modal-footer.component'

describe('NewAppointmentModalFooterComponent', () => {
	let component: NewAppointmentModalFooterComponent
	let fixture: ComponentFixture<NewAppointmentModalFooterComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [NewAppointmentModalFooterComponent],
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(NewAppointmentModalFooterComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
