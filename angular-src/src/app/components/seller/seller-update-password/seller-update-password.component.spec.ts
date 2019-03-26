import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerUpdatePasswordComponent } from './seller-update-password.component';

describe('SellerUpdatePasswordComponent', () => {
  let component: SellerUpdatePasswordComponent;
  let fixture: ComponentFixture<SellerUpdatePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerUpdatePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerUpdatePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
