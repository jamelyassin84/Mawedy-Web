import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignAppointmentToModalFooterComponent } from './assign-appointment-to-modal-footer.component';

describe('AssignAppointmentToModalFooterComponent', () => {
  let component: AssignAppointmentToModalFooterComponent;
  let fixture: ComponentFixture<AssignAppointmentToModalFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignAppointmentToModalFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignAppointmentToModalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
