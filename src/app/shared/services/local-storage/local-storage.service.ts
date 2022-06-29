import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  /**
   * Getter for the symbols array
   */
  public get symbols(): string[] {
    const stocks = localStorage.getItem('symbols')
    return stocks ? JSON.parse(stocks) : [];
  }

  /**
   * Setter for the symbols array
   */
  public set symbols(symbols: string[]) {
    localStorage.setItem('symbols', JSON.stringify(symbols));
  }
}
