import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SentimentStockComponent } from './components/sentiment-stock/sentiment-stock.component';
import { StockDashboardComponent } from './components/stock-dashboard/stock-dashboard.component';
import { QuoteStocksResolver } from './shared/resolvers/quote-stock/quote-stock.resolver';
import { SentimentStockResolver } from './shared/resolvers/sentiment-stock/sentiment-stock.resolver';

const routes: Routes = [
  {
    path: 'sentiment/:symbol',
    component: SentimentStockComponent,
    resolve: { stock: SentimentStockResolver },
  },
  {
    path: '**',
    redirectTo: '',
    component: StockDashboardComponent,
    resolve: { stocks: QuoteStocksResolver },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
