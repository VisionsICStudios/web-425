/*
============================================
; Title:  main.ts (WK 5)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 09 August 2019
; Description: MD In Action TS file.
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
