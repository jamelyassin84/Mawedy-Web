import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsNewAppointmentsComponent } from './modals-new-appointments.component';

describe('ModalsNewAppointmentsComponent', () => {
  let component: ModalsNewAppointmentsComponent;
  let fixture: ComponentFixture<ModalsNewAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalsNewAppointmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsNewAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
