/*
============================================
; Title:  app-routing.module.ts (WK 9)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 2 September 2019
; Description: Bob's Computer Repair Shop App
; Credits: All images provided by Pexels.com
;===========================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InvoiceWindowComponent } from './home/windows/invoice/invoice.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'window/invoice', component: InvoiceWindowComponent },
  { path: 'invoice', component: InvoiceComponent },
  { path: 'login', component: LoginComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ HomeComponent, InvoiceWindowComponent, InvoiceComponent, LoginComponent, OrdersComponent, ProfileComponent, SettingsComponent ]
