/*
============================================
; Title:  home.component.ts (WK 4)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 04 August 2019
; Description: Async Pipe TS file.
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p>
    Oh My! You landed on the Fruit-App Home Page!
    </p>
`,
styles: [`
  p {
    background-color: steelblue;
    color: white;
    padding: 20px;
  }
`]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
