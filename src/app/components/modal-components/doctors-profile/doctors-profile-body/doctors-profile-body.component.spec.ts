import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsProfileBodyComponent } from './doctors-profile-body.component';

describe('DoctorsProfileBodyComponent', () => {
  let component: DoctorsProfileBodyComponent;
  let fixture: ComponentFixture<DoctorsProfileBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsProfileBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsProfileBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
