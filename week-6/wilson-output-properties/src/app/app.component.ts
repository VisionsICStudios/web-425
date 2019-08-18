/*
============================================
; Title:  app.component.ts (WK 6)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 12 August 2019
; Description: Output Properties TS file.
; Credits: All images provided by Pexels.com
;===========================================
*/

import { Component } from '@angular/core';
import { PriceQuote } from "./price-quote/iprice.quote";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Wilson Output Properties';

  priceQuote: PriceQuote;

  priceQuoteHandler(event: PriceQuote) {
    this.priceQuote = event;
  }
}
