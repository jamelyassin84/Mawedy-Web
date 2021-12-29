import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsProfileModalBodyComponent } from './patients-profile-modal-body.component';

describe('PatientsProfileModalBodyComponent', () => {
  let component: PatientsProfileModalBodyComponent;
  let fixture: ComponentFixture<PatientsProfileModalBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsProfileModalBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsProfileModalBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
