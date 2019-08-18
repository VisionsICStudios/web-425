/*
============================================
; Title:  app-routing.module.ts (WK 6)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 12 August 2019
; Description: Output Properties TS file.
; Credits: All images provided by Pexels.com
;===========================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { PriceQuoteComponent } from './price-quote/price-quote.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'order', component: OrderComponent },
  { path: 'price-quote', component: PriceQuoteComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ HomeComponent, OrderComponent, PriceQuoteComponent, ProfileComponent, SettingsComponent ]
