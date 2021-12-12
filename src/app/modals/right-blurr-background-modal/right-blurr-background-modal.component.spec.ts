import { ComponentFixture, TestBed } from '@angular/core/testing'

import { RightBlurBackgroundModalComponent } from './right-blurr-background-modal.component'

describe('RightBlurBackgroundModalComponent', () => {
	let component: RightBlurBackgroundModalComponent
	let fixture: ComponentFixture<RightBlurBackgroundModalComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [RightBlurBackgroundModalComponent],
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(RightBlurBackgroundModalComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
