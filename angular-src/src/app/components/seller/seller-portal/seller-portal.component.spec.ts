import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerPortalComponent } from './seller-portal.component';

describe('SellerPortal', () => {
  let component: SellerPortalComponent;
  let fixture: ComponentFixture<SellerPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
