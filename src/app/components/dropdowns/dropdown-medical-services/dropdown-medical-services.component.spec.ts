import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownMedicalServicesComponent } from './dropdown-medical-services.component';

describe('DropdownMedicalServicesComponent', () => {
  let component: DropdownMedicalServicesComponent;
  let fixture: ComponentFixture<DropdownMedicalServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownMedicalServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownMedicalServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
