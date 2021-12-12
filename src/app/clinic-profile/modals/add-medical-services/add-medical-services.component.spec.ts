import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedicalServicesComponent } from './add-medical-services.component';

describe('AddMedicalServicesComponent', () => {
  let component: AddMedicalServicesComponent;
  let fixture: ComponentFixture<AddMedicalServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMedicalServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMedicalServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
