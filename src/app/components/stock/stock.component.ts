import { Component, Input } from '@angular/core';
import { Stock } from 'src/app/shared/models/stock.model';

/**
 * Stock card to display stock informations
 * use ng-content to display specific content
 */
@Component({
  selector: 'app-stock',
  template: `
  <div class="stock-container">
    <mat-card [class.error]="!stock.valid">
      <div class="header">
        <div class="title">{{ (stock.description || 'Unknown name') + ' (' + (stock.symbol || 'Unknown symbol') + ')' }}</div>
        <span><ng-content select=".close"></ng-content></span>
      </div>
      <ng-content></ng-content>
    </mat-card>
  </div>`,
  styleUrls: ['./stock.component.scss']
})
export class StockComponent {

  @Input() stock!: Stock;
}
