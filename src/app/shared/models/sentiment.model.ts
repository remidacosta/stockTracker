
// DTO and doc from : https://finnhub.io/docs/api/insider-sentiment
export interface ISentimentDTO {
  symbol: string,
  year: number,
  month: number,

  // Net buying/selling from all insiders' transactions
  change: number,

  // Monthly Share Purchase Ratio
  mspr: number
}

export interface ISentiment {
  date: Date,
  change: number,
  mspr: number
}

export class Sentiment implements ISentiment {
  date: Date
  change: number
  mspr: number

  constructor(dto: ISentimentDTO) {
    this.date = new Date(new Date().setFullYear(dto.year, dto.month - 1));
    this.change = dto.change;
    this.mspr = dto.mspr;
  }
}
