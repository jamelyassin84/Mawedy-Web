import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownPatientsComponent } from './dropdown-patients.component';

describe('DropdownPatientsComponent', () => {
  let component: DropdownPatientsComponent;
  let fixture: ComponentFixture<DropdownPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownPatientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
