
// DTO and doc from : https://finnhub.io/docs/api/quote
export interface IQuoteDTO {
  // current price
  c: number,

  // change
  d: number,

  // percent change
  dp: number,

  // high price of the day
  h: number,

  // low price of the day
  l: number,

  // open price of the day
  o: number,

  // previous close price
  pc: number
}

export interface IQuote {
  current: number,
  change: number,
  open: number,
  high: number
}

export class Quote implements IQuote {
  current: number
  change: number
  open: number
  high: number

  constructor(dto: IQuoteDTO) {
    this.current = dto.c;
    this.change = dto.dp; // percent change and not change
    this.open = dto.o;
    this.high = dto.h;
  }
}
