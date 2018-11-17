import { TestBed } from '@angular/core/testing';

import { StoreFetchService } from './storeFetch.service';

describe('StoreFetchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreFetchService = TestBed.get(StoreFetchService);
    expect(service).toBeTruthy();
  });
});
