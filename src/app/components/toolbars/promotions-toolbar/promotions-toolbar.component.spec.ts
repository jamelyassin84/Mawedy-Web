import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsToolbarComponent } from './promotions-toolbar.component';

describe('PromotionsToolbarComponent', () => {
  let component: PromotionsToolbarComponent;
  let fixture: ComponentFixture<PromotionsToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionsToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionsToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
