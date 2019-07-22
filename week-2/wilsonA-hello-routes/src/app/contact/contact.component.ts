/*
============================================
; Title:  contact.component.ts (WK 2)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 21 July 2019
; Description: Routing
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <div class="container">
      <div class="row">
        <h2>Welcome to the Contact Page!</h2>
      </div>
    </div>
  `,
  styles: [ `
    .container {
      margin-top: 20px;
    }
    h2 {
      color: steelblue;
    }
  `
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
