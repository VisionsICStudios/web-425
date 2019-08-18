/*
============================================
; Title:  order.component.ts (WK 6)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 12 August 2019
; Description: Input Properties TS file.
; Credits: All images provided by Pexels.com
;===========================================
*/

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input() quantity: number;
  @Input() stockSymbol: string;

  constructor() { }

  ngOnInit() {
  }
}
