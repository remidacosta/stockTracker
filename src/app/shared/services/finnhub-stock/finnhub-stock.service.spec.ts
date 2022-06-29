import { TestBed } from '@angular/core/testing';

import { FinnhubStockService } from './finnhub-stock.service';

describe('FinnhubStockService', () => {
  let service: FinnhubStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinnhubStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
