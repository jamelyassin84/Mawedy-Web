import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentDetailsBodyComponent } from './appointment-details-body.component';

describe('AppointmentDetailsBodyComponent', () => {
  let component: AppointmentDetailsBodyComponent;
  let fixture: ComponentFixture<AppointmentDetailsBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentDetailsBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentDetailsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
