import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicServiceCardComponent } from './clinic-service-card.component';

describe('ClinicServiceCardComponent', () => {
  let component: ClinicServiceCardComponent;
  let fixture: ComponentFixture<ClinicServiceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicServiceCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicServiceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
