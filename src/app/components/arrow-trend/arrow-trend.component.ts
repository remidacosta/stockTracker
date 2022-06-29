import { Component, Input } from '@angular/core';

/**
 * Display arrow according to the value passed in parameter
 * Is the value is positive then display an upward green arrow
 * Else display a downward red arrow
 */
@Component({
  selector: 'app-arrow-trend',
  template: `
  <div class="arrow">
    <mat-icon *ngIf="+value < 0" class="down">arrow_downward</mat-icon>
    <mat-icon *ngIf="+value >= 0" class="up">arrow_upward</mat-icon>
  </div>`,
  styleUrls: ['./arrow-trend.component.scss']
})
export class ArrowTrendComponent {

  @Input() value!: number | string;
}
