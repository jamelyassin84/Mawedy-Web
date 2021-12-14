import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignAppointmentToComponent } from './assign-appointment-to.component';

describe('AssignAppointmentToComponent', () => {
  let component: AssignAppointmentToComponent;
  let fixture: ComponentFixture<AssignAppointmentToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignAppointmentToComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignAppointmentToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
