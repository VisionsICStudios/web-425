/*
============================================
; Title:  main.ts (WK 6)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 12 August 2019
; Description: Output Properties TS file.
; Credits: All images provided by Pexels.com
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
