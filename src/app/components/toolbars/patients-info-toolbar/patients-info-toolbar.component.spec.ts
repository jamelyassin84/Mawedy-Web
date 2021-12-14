import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsInfoToolbarComponent } from './patients-info-toolbar.component';

describe('PatientsInfoToolbarComponent', () => {
  let component: PatientsInfoToolbarComponent;
  let fixture: ComponentFixture<PatientsInfoToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsInfoToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsInfoToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
