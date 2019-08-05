/*
============================================
; Title:  fruit.service.ts (WK 4)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 04 August 2019
; Description: Async Pipe TS file.
;===========================================
*/

import { Injectable } from '@angular/core';
import { Fruit } from './fruit';
import { Observable, of} from 'rxjs';
import 'rxjs-compat';

@Injectable()

export class FruitService {

  fruits: Fruit[] = [
    { id: 1, name: 'Apple', pricePerPound: '.99', quantity: 90 },
    { id: 2, name: 'Peach', pricePerPound: '.60', quantity: 60 },
    { id: 3, name: 'Grapefruit', pricePerPound: '.55', quantity: 30 },
    { id: 4, name: 'Pineapple', pricePerPound: '1.09', quantity: 10 },
    { id: 5, name: 'Mangos', pricePerPound: '.89', quantity: 20 }
  ];

  constructor () {}

  getFruits(): Observable<Fruit[]> {
      return Observable.of(this.fruits);
  }
}
