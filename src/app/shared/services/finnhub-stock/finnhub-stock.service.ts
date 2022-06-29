import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IQuoteDTO, Quote } from './../../models/quote.model';
import { ISentimentDTO, Sentiment } from './../../models/sentiment.model';
import { IStockDTO, Stock } from './../../models/stock.model';

@Injectable({
  providedIn: 'root'
})
export class FinnhubStockService {

  private _apiUrlPrefix = 'https://finnhub.io/api/v1/';

  constructor(private http: HttpClient) { }

  /**
   * Get real-time quote data for US stocks
   * Doc : https://finnhub.io/docs/api/quote
   * @param symbol
   * @returns an observable with a quote
   */
  getQuote(symbol: string): Observable<Quote> {
    return this.http.get<IQuoteDTO>(this._apiUrlPrefix + `quote?symbol=${symbol}`)
      .pipe(map((quote$) => new Quote(quote$)));
  }

  /**
   * Search for best-matching symbols based on your query. You can input anything from symbol, security's name to ISIN and Cusip.
   * Doc : https://finnhub.io/docs/api/symbol-search
   * @param query
   * @returns an observable with a list of stock which match the query parameter
   */
  getStocks(query: string): Observable<Stock[]> {
    return this.http.get<{ count: number, result: IStockDTO[] }>(this._apiUrlPrefix + `search?q=${query}`)
      .pipe(map((response$) =>response$.result.map((stock$) => new Stock(stock$))));
  }

  /**
   * return an observable with a stock that match the symbol passed in parameter
   * if the symbol do not match, undefined value is returned
   * @param symbol : 1 to 5 uppercase letters symbol
   * @returns an observable with a stock of an undefined value
   */
  getStockBySymbol(symbol: string): Observable<Stock | undefined> {
    return this.getStocks(symbol).pipe(
      map((stocks$) => (stocks$.find((stock$) => stock$.symbol === symbol)))
    );
  }

  /**
   * Get insider sentiment data for US companies calculated using method discussed here.
   * The MSPR ranges from -100 for the most negative to 100 for the most positive which can signal price changes
   * in the coming 30-90 days.
   * Doc : https://finnhub.io/docs/api/insider-sentiment
   * @param symbol of the company : APPL
   * @param start format : 2020-03-15
   * @param end format : 2020-03-15
   * @returns an observable with a list of sentiments
   */
  getSentiments(symbol: string, start: string, end: string): Observable<Sentiment[]> {
    return this.http.get<{ symbol: string, data: ISentimentDTO[] }>(
      this._apiUrlPrefix + `stock/insider-sentiment?symbol=${symbol}&from=${start}&to=${end}`
    ).pipe(map((response$) =>response$.data.map((sentiment$) => new Sentiment(sentiment$))));
  }
}
