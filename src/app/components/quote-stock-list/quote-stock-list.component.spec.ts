import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteStockListComponent } from './quote-stock-list.component';

describe('QuoteStockListComponent', () => {
  let component: QuoteStockListComponent;
  let fixture: ComponentFixture<QuoteStockListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteStockListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteStockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
