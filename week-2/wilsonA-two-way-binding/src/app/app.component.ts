/*
============================================
; Title:  app.component.ts (WK 2)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 21 July 2019
; Description: Two-Way Binding
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <br /><br /><br />
  <nav class="navbar navbar-dark bg-primary">
    <span class="navbar-brand mb-0 h1">Aaron Wilson | Exercise 2.3 | 2 Way Binding</span>
  </nav>

  <div class="container-fluid two-way-form">

    <h2>Two-Way Binding Example</h2><br />

    <div class="form-group">
        <input class="form-control" type="text" placeholder="Enter your name ..." [(ngModel)]="name">
        <button class="btn btn-primary form-control" (click)="name=''">Clear Name</button>
    </div>

    <div class="form-group">
        <p class="alert-success">Welcome to two-way binding, {{name}}! </p>
    </div>
  </div>
  `,
  styles: [
    `.two-way-form {
      width: 50%;
    }`
   ]
})
export class AppComponent {
  name: string;
}
