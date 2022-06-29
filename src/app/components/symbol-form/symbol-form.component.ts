import { Component, EventEmitter, Output } from '@angular/core';

/**
 * Simple form with one input, that allow the user input of a 1 to 5 letters symbol
 * Display errors if empty or contains numbers or no-letters
 */
@Component({
  selector: 'app-symbol-form',
  template: `
  <mat-card>
    <mat-card-subtitle>Enter the symbol of a stock to track (i.e AAPL, TSLA, GOOGL)</mat-card-subtitle>
    <mat-form-field appearance="outline">
      <input matInput
        type="text"
        placeholder="Enter a valid symbol"
        minlength="1"
        maxlength="5"
        required
        pattern="[a-zA-Z]*"
        [(ngModel)]="symbol"
        #symbolModel="ngModel">
      <mat-error *ngIf="symbolModel.hasError('required')">Trade symbol is <strong>required</strong></mat-error>
      <mat-error *ngIf="symbolModel.hasError('pattern')">Trade symbol must contains only letters</mat-error>
    </mat-form-field>

    <button mat-button
      [disabled]="symbolModel.invalid"
      (click)="onClick(); symbolModel.reset()">Track Stock</button>
  </mat-card>`,
  styleUrls: ['./symbol-form.component.scss']
})
export class SymbolFormComponent {

  @Output() symbolSelected = new EventEmitter<string>();

  symbol: string = '';

  onClick(): void {
    this.symbolSelected.emit(this.symbol.toUpperCase());
    this.symbol = '';
  }

}
