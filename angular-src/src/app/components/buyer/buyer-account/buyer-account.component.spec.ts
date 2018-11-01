import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerAccountComponent } from './buyer-account.component';

describe('BuyerAccountComponent', () => {
  let component: BuyerAccountComponent;
  let fixture: ComponentFixture<BuyerAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
