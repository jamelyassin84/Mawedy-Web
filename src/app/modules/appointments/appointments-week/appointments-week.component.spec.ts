import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsWeekComponent } from './appointments-week.component';

describe('AppointmentsWeekComponent', () => {
  let component: AppointmentsWeekComponent;
  let fixture: ComponentFixture<AppointmentsWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentsWeekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentsWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
