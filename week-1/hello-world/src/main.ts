/*
============================================
; Title:  main.ts (WK 1)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 13 July 2019
; Description: main application imports
; and requirements
;===========================================
*/

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
