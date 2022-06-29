import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { forkJoin, map, Observable, of } from 'rxjs';
import { Stock } from '../../models/stock.model';
import { FinnhubStockService } from './../../services/finnhub-stock/finnhub-stock.service';
import { LocalStorageService } from './../../services/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class QuoteStocksResolver implements Resolve<(Stock | undefined)[]> {

  constructor(
    private localStorage: LocalStorageService,
    private stockService: FinnhubStockService
  ) {}

  resolve(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<(Stock | undefined)[]> {
    return !!this.localStorage.symbols.length ?
      // return the response for all symbols used to get stocks informations
      forkJoin(
        // Use symbols stored to request : company informations and quotes
        this.localStorage.symbols.map((symbol$) =>
        // join both requests's response
          forkJoin([
            this.stockService.getStockBySymbol(symbol$),
            this.stockService.getQuote(symbol$)
          ]).pipe(
            // use the joined response to create a new observable
            map(([stock$, quote$]) => ({ ...stock$, symbol: symbol$, quote: quote$, valid: !!stock$ } as Stock))
          )
        )
      )
      // if no symbol was stored, return empty array observable
    : of([]);
  }

}
