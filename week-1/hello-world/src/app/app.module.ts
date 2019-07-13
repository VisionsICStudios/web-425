/*
============================================
; Title:  app.module.ts (WK 1)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 13 July 2019
; Description: Controls application modules
;===========================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
