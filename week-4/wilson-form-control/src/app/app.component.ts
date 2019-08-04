/*
============================================
; Title:  aap.component.ts (WK 4)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 04 August 2019
; Description: Form Control TS file.
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <!--The content below is only a placeholder and can be replaced.-->
      <div style="text-align:center">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <a class="navbar-brand" href="#">Form-App</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a [routerLink]="['/']" class="nav-link">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a [routerLink]="['/form']" class="nav-link">Form</a>
              </li>
            </ul>
            <span class="navbar-text">
              Navbar text with an inline element
            </span>
          </div>
        </nav>
        <br>

        <h1>
          Welcome to {{ title }}!
        </h1>
      </div>

      <router-outlet></router-outlet>
  `,
  styles: [`

  `]
})
export class AppComponent {
  title = 'wilson-form-control';
}
