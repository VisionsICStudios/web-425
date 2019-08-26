/*
============================================
; Title:  app-routing.module.ts (WK 7)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 20 August 2019
; Description: Form Validation TS file.
; Credits: All images provided by Pexels.com
;===========================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [ HomeComponent, ProfileComponent, SettingsComponent ]
