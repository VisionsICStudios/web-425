/*
============================================
; Title:  home.component.ts (WK 6)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 12 August 2019
; Description: Input Properties TS file.
; Credits: All images provided by Pexels.com
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'wilson-input-properties';

  stock: string;
  readonly numberOfShares = 300;

  onChangeEvent({ target }): void {
    this.stock = target.value;
  }

  constructor() { }

  ngOnInit() {
  }

}
