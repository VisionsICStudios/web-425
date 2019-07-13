/*
============================================
; Title:  app.component.ts (WK 1)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 13 July 2019
; Description: Controls app component flow
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World!';
}
