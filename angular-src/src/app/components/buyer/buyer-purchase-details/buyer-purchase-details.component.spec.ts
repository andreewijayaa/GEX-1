import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerPurchaseDetailsComponent } from './buyer-purchase-details.component';

describe('BuyerPurchaseDetailsComponent', () => {
  let component: BuyerPurchaseDetailsComponent;
  let fixture: ComponentFixture<BuyerPurchaseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerPurchaseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerPurchaseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
