/*
============================================
; Title:  app.module.ts (WK 2)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 21 July 2019
; Description: One-Way Binding
;===========================================
*/


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
