import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightLargeModalComponent } from './right-large-modal.component';

describe('RightLargeModalComponent', () => {
  let component: RightLargeModalComponent;
  let fixture: ComponentFixture<RightLargeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightLargeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightLargeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
