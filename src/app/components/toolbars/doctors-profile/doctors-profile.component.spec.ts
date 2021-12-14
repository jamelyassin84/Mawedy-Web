import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DoctorsProfileToolbarComponent } from './doctors-profile.component'

describe('DoctorsProfileToolbarComponent', () => {
	let component: DoctorsProfileToolbarComponent
	let fixture: ComponentFixture<DoctorsProfileToolbarComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [DoctorsProfileToolbarComponent],
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(DoctorsProfileToolbarComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
