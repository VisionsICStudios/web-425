/*
============================================
; Title:  app.routing.module.ts (WK 1)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 13 July 2019
; Description: Controls application routing
;===========================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
