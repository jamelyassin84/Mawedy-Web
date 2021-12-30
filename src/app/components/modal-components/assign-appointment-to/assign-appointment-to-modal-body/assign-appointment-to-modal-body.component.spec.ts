import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignAppointmentToModalBodyComponent } from './assign-appointment-to-modal-body.component';

describe('AssignAppointmentToModalBodyComponent', () => {
  let component: AssignAppointmentToModalBodyComponent;
  let fixture: ComponentFixture<AssignAppointmentToModalBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignAppointmentToModalBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignAppointmentToModalBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
