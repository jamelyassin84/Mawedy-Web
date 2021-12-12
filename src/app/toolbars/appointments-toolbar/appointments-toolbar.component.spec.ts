import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsToolbarComponent } from './appointments-toolbar.component';

describe('AppointmentsToolbarComponent', () => {
  let component: AppointmentsToolbarComponent;
  let fixture: ComponentFixture<AppointmentsToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentsToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentsToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
