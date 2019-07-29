/*
============================================
; Title:  e404.component.ts (WK 3)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 28 July 2019
; Description: Query Params .ts file.
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e404',
  template: `
    <div class="container">
      <div class="row">
        <h2>Page Not Found!</h2>
      </div>
    </div
  `,
  styles: [`
    .container {
      margin-top: 20px;
    }
    h2 {
      color: red;
    }
  `]
})
export class E404Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
