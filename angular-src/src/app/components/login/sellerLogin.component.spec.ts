import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerLoginComponent } from './sellerLogin.component';

describe('SellerLoginComponent', () => {
  let component: SellerLoginComponent;
  let fixture: ComponentFixture<SellerLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});