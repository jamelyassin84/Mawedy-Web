import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientOutreachComponent } from './patient-outreach.component';

describe('PatientOutreachComponent', () => {
  let component: PatientOutreachComponent;
  let fixture: ComponentFixture<PatientOutreachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientOutreachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientOutreachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
