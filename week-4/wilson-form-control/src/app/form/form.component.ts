/*
============================================
; Title:  form.component.ts (WK 4)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 04 August 2019
; Description: Form Control TS file.
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { debounceTime } from "rxjs/operators";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-form',
  template: `
    <br /><br />
    <div class="container">
      <div class="row">
        <div class="col">
          <h2>Handling Form Events with Observables</h2>
          <br />
          <div class="form-group">
            <label for="txtStockPrice">Stock Price: </label>
            <input type="text"
                   class="form-control"
                   id="txtStockPrice"
                   placeholder="Enter stock price..."
                   [formControl]="searchInput">
          </div>
        </div>
      </div>

      <br /><br />
      <div class="row">
        <div class="col">
          <h4 class="txt-bold">Results: <span class="price">{{ convertedStockPrice }}</span></h4>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .txt-bold {
        font-weight: bold;
      }
      .price {
        background-color: lightgreen;
        border: 1px solid darkgreen;
      }
    `
  ]
})
export class FormComponent implements OnInit {

  searchInput = new FormControl('');
  convertedStockPrice: string;

  constructor() {
    this.searchInput.valueChanges.pipe(debounceTime(500))
      .subscribe(stock => this.getStockQuoteFromServer(stock));
  }

  getStockQuoteFromServer(stock: string) {
    this.convertedStockPrice =
      `The price of ${stock} is ${(100 * Math.random()).toFixed(4)}`;
  }

  ngOnInit() {
  }

}
