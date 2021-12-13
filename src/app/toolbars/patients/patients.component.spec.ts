import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PatientsToolbarComponent } from './patients.component'

describe('PatientsToolbarComponent', () => {
	let component: PatientsToolbarComponent
	let fixture: ComponentFixture<PatientsToolbarComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PatientsToolbarComponent],
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(PatientsToolbarComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
