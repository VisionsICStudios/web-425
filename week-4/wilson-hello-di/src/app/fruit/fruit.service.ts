/*
============================================
; Title:  fruit.service.ts (WK 4)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 04 August 2019
; Description: Hello DI TS file.
;===========================================
*/

import { Injectable } from '@angular/core';
import { Fruit } from './fruit';

@Injectable()

export class FruitService {

  getFruit() {
    return new Fruit( 1, 'Apple', 'red');
  }
}
