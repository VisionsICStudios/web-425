/*
============================================
; Title:  app.component.ts (WK 2)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 21 July 2019
; Description: One-Way Binding
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{name}}</h1>
  <button (click)="changeName()">Change Name</button>`,
  styles: [`h1 {
    color: red;
  }`]
})
export class AppComponent {
  title = 'wilsonA-one-way-binding';

  // Current class property.
  name:string = 'John Doe';

  // ChangeName function.
  changeName () {
    return this.name = 'Aaron Wilson';
  }
}
