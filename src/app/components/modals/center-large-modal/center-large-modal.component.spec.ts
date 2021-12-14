import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterLargeModalComponent } from './center-large-modal.component';

describe('CenterLargeModalComponent', () => {
  let component: CenterLargeModalComponent;
  let fixture: ComponentFixture<CenterLargeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterLargeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterLargeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
