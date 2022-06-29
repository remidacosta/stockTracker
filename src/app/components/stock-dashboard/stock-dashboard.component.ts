import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, map } from 'rxjs';
import { Stock } from 'src/app/shared/models/stock.model';
import { FinnhubStockService } from './../../shared/services/finnhub-stock/finnhub-stock.service';
import { LocalStorageService } from './../../shared/services/local-storage/local-storage.service';

/**
 * Dashboard component to select trade symbols and display informations about it
 */
@Component({
  selector: 'app-stock-dashboard',
  templateUrl: './stock-dashboard.component.html',
  styleUrls: ['./stock-dashboard.component.scss']
})
export class StockDashboardComponent implements OnInit {

  stocks!: Stock[];

  constructor(
    private route: ActivatedRoute,
    private localStorage: LocalStorageService,
    private stockService: FinnhubStockService
  ) { }

  ngOnInit(): void {
    // Ge the stocks informations from the resolver : QuoteStocksResolver
    this.stocks = this.route.snapshot.data['stocks'];
  }

  onSymbolSelection(symbol: string) {
    this.localStorage.symbols = [ ...this.localStorage.symbols, symbol];
    forkJoin([
      this.stockService.getStockBySymbol(symbol),
      this.stockService.getQuote(symbol)
    ]).pipe(
      // use the joined response to create a new observable
      map((response$) => ({ ...response$[0], symbol: symbol, quote: response$[1], valid: !!response$[0] } as Stock))
    ).subscribe((stock$) => this.stocks.push(stock$))
  }

  onListModification(newStocks: Stock[]): void {
    this.localStorage.symbols = newStocks.map((stock$) => stock$.symbol);
    this.stocks = newStocks;
  }

}
