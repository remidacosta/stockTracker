import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stock } from 'src/app/shared/models/stock.model';

@Component({
  selector: 'app-sentiment-stock',
  templateUrl: './sentiment-stock.component.html',
  styleUrls: ['./sentiment-stock.component.scss']
})
export class SentimentStockComponent implements OnInit {

  stock!: Stock;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.stock = this.route.snapshot.data['stock'];
  }

}
