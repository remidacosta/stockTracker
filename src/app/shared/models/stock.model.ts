import { Quote } from './quote.model';
import { Sentiment } from './sentiment.model';

// DTO and doc from : https://finnhub.io/docs/api/symbol-search
export interface IStockDTO {
  // symbol description
  description: string,

  // display symbol name
  displaySymbol: string,

  // unique symbol used to identify this symbol used in /stock/candle
  symbol: string,

  // security type
  type: string
}

export interface IStock {
  description: string;
  symbol: string;
}

export class Stock implements IStock {
  description: string;
  symbol: string;
  valid: boolean;
  quote?: Quote;
  sentiments?: Sentiment[];

  constructor(dto: IStockDTO) {
    this.description = dto.description;
    this.symbol = dto.symbol;
    this.valid = true;
  }
}
