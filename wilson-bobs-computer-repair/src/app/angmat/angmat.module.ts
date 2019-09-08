/*
============================================
; Title:  material.module.ts (WK 9)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 2 September 2019
; Description: Bob's Computer Repair Shop App
; Credits: All images provided by Pexels.com
;===========================================
*/

import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

const materialComponents = [
  MatFormFieldModule,
  MatInputModule,
  LayoutModule,
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCheckboxModule
];

@NgModule({

  imports: [
    materialComponents
  ],
  exports: [
    materialComponents
  ]
})

export class AngmatModule { }
