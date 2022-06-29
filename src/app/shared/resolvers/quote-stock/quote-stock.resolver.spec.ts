import { TestBed } from '@angular/core/testing';

import { QuoteStocksResolver } from './quote-stock.resolver';

describe('QuoteStockResolver', () => {
  let resolver: QuoteStocksResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(QuoteStocksResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
