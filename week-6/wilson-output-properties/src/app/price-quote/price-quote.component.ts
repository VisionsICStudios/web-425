/*
============================================
; Title:  price-quote.component.ts (WK 6)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 12 August 2019
; Description: Output Properties HTML file.
; Credits: All images provided by Pexels.com
;===========================================
*/

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PriceQuote } from "./iprice.quote";
import { interval } from "rxjs/index";

@Component({
  selector: 'app-price-quote',
  templateUrl: './price-quote.component.html',
  styleUrls: ['./price-quote.component.css']
})
export class PriceQuoteComponent implements OnInit {

  @Output() lastPrice = new EventEmitter<PriceQuote>();

  priceQuote: PriceQuote;

  constructor() {
    interval(2000)
      .subscribe(data => {
        this.priceQuote = {
          stockSymbol: 'MSFT',
          lastPrice:  100 * Math.random(),
        };

        this.lastPrice.emit(this.priceQuote);
      });
  }

  ngOnInit() {
  }
}
