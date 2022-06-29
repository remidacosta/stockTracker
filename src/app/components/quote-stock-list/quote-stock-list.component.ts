import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Stock } from 'src/app/shared/models/stock.model';

@Component({
  selector: 'app-quote-stock-list',
  templateUrl: './quote-stock-list.component.html',
  styleUrls: ['./quote-stock-list.component.scss']
})
export class QuoteStockListComponent {

  @Input() list: Stock[] = [];

  @Output() listModified = new EventEmitter<Stock[]>();

  onDeleteClick(stock: Stock): void {
    this.list.splice(this.list.indexOf(stock), 1);
    this.listModified.emit(this.list);
  }

}
