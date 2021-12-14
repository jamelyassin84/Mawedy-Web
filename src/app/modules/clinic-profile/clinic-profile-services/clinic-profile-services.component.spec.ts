import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicProfileServicesComponent } from './clinic-profile-services.component';

describe('ClinicProfileServicesComponent', () => {
  let component: ClinicProfileServicesComponent;
  let fixture: ComponentFixture<ClinicProfileServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicProfileServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicProfileServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
