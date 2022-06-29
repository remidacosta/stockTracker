import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, Resolve,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { forkJoin, map, Observable, of } from 'rxjs';
import { Stock } from '../../models/stock.model';
import { FinnhubStockService } from '../../services/finnhub-stock/finnhub-stock.service';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SentimentStockResolver implements Resolve<Stock | undefined> {

  constructor(
    private localStorage: LocalStorageService,
    private stockService: FinnhubStockService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Stock | undefined> {
    const symbol: string = (route.paramMap.get('symbol') as string)?.toUpperCase();

    // cancel the resolver if the symbol is not stored in local storage
    if (!this.localStorage.symbols.includes(symbol)) {
      this.router.navigate(['/']);
      return of(undefined);
    }

    const currentDate = new Date();
    // make two request, to get company data + sentiments for the last three months
    return forkJoin([
      this.stockService.getStockBySymbol(symbol as string),
      this.stockService.getSentiments(
        symbol as string,
        // start date will be the current month minus 2 because months start at index 0 for january
        formatDate(new Date().setMonth(currentDate.getMonth() - 2), 'yyyy-MM-dd', 'fr', 'UTC'),
        formatDate(currentDate, 'yyyy-MM-dd', 'fr', 'UTC')
      )])
    .pipe(
      map(([stock$, sentiments$]) => {
        if (!!stock$) {
          return { ...stock$, sentiments: sentiments$ } as Stock;
        }

        // cancel resolver and redirect if the symbol did not match with a company symbol
        this.router.navigate(['/']);
        return undefined;
      })
    );
  }
}
