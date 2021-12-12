import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinciProfileToolbarComponent } from './clinci-profile-toolbar.component';

describe('ClinciProfileToolbarComponent', () => {
  let component: ClinciProfileToolbarComponent;
  let fixture: ComponentFixture<ClinciProfileToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinciProfileToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinciProfileToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
