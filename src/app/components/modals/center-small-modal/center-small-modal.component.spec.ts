import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterSmallModalComponent } from './center-small-modal.component';

describe('CenterSmallModalComponent', () => {
  let component: CenterSmallModalComponent;
  let fixture: ComponentFixture<CenterSmallModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterSmallModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterSmallModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
