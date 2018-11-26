import { TestBed, async, inject } from '@angular/core/testing';

import { SellerAuthGuard } from './sellerAuth.guard';

describe('SellerAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SellerAuthGuard]
    });
  });

  it('should ...', inject([SellerAuthGuard], (guard: SellerAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
