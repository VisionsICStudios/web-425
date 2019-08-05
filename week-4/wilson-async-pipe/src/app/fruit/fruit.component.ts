/*
============================================
; Title:  fruit.component.ts (WK 4)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 04 August 2019
; Description: Async Pipe TS file.
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Fruit } from './fruit';
import { FruitService } from './fruit.service';

@Component({
  selector: 'app-fruit',
  template: `
    <div class="container">
      <div class="row">
        <h2>Fruit Details</h2>
        <table class="table table-hover table-striped">
          <thead class="tbl-header">
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE PER LB</th>
              <th>QUANTITY</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let fruit of fruits | async">
              <td>{{ fruit.id }}</td>
              <td>{{ fruit.name }}</td>
              <td>{{ fruit.pricePerPound }}</td>
              <td>{{ fruit.quantity }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [
    `
      .tbl-header {
        background-color: steelblue;
        color: white;
      }
    `
  ],
  providers: [FruitService] // Unsure if this is needed.
})
export class FruitComponent implements OnInit {

  fruits: Observable<Fruit[]>;
  title = 'app';

  constructor(private fruitService: FruitService) {}

  ngOnInit() {
    this.fruits = this.fruitService.getFruits();
  }

}
