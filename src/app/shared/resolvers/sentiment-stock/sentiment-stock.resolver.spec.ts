import { TestBed } from '@angular/core/testing';

import { SentimentStockResolver } from './sentiment-stock.resolver';

describe('SentimentStockResolver', () => {
  let resolver: SentimentStockResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SentimentStockResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
