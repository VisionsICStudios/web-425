import { LoginComponent } from './../../../../week-3/wilsonA-guards/src/app/login/login.component';
/*
============================================
; Title:  app-routing.module.ts (WK 5)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 09 August 2019
; Description: MD In Action TS file.
;===========================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LogInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ HomeComponent, LogInComponent ]
