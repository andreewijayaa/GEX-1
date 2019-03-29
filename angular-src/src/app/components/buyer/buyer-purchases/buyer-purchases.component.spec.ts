import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerPurchasesComponent } from './buyer-purchases.component';

describe('BuyerPurchasesComponent', () => {
  let component: BuyerPurchasesComponent;
  let fixture: ComponentFixture<BuyerPurchasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerPurchasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
