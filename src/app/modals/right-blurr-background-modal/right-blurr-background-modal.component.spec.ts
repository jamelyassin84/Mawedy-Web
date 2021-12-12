import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightBlurrBackgroundModalComponent } from './right-blurr-background-modal.component';

describe('RightBlurrBackgroundModalComponent', () => {
  let component: RightBlurrBackgroundModalComponent;
  let fixture: ComponentFixture<RightBlurrBackgroundModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightBlurrBackgroundModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightBlurrBackgroundModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
