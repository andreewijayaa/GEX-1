import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerUpdatePasswordComponent } from './buyer-update-password.component';

describe('BuyerUpdatePasswordComponent', () => {
  let component: BuyerUpdatePasswordComponent;
  let fixture: ComponentFixture<BuyerUpdatePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerUpdatePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerUpdatePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
