import { TestBed, async, inject } from '@angular/core/testing';

import { BuyerAuthGuard } from './buyerAuth.guard';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuyerAuthGuard]
    });
  });

  it('should ...', inject([BuyerAuthGuard], (guard: BuyerAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
