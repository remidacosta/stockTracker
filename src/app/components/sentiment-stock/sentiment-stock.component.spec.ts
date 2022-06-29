import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentStockComponent } from './sentiment-stock.component';

describe('SentimentStockComponent', () => {
  let component: SentimentStockComponent;
  let fixture: ComponentFixture<SentimentStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentimentStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentimentStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
