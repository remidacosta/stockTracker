import { registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ArrowTrendComponent } from './components/arrow-trend/arrow-trend.component';
import { QuoteStockListComponent } from './components/quote-stock-list/quote-stock-list.component';
import { SentimentStockComponent } from './components/sentiment-stock/sentiment-stock.component';
import { StockDashboardComponent } from './components/stock-dashboard/stock-dashboard.component';
import { StockComponent } from './components/stock/stock.component';
import { SymbolFormComponent } from './components/symbol-form/symbol-form.component';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { LoadingInterceptor } from './shared/interceptors/loading.interceptor';
import { SharedModule } from './shared/shared.module';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    StockDashboardComponent,
    SymbolFormComponent,
    QuoteStockListComponent,
    StockComponent,
    SentimentStockComponent,
    ArrowTrendComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
