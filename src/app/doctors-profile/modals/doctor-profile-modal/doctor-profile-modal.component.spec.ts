import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorProfileModalComponent } from './doctor-profile-modal.component';

describe('DoctorProfileModalComponent', () => {
  let component: DoctorProfileModalComponent;
  let fixture: ComponentFixture<DoctorProfileModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorProfileModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorProfileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
