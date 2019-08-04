/*
============================================
; Title:  app-routing.module.ts (WK 4)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 04 August 2019
; Description: Hello DI TS file.
;===========================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FruitComponent } from './fruit/fruit.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fruit', component: FruitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
