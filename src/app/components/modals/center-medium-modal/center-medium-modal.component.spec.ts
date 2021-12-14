import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterMediumModalComponent } from './center-medium-modal.component';

describe('CenterMediumModalComponent', () => {
  let component: CenterMediumModalComponent;
  let fixture: ComponentFixture<CenterMediumModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterMediumModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterMediumModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
