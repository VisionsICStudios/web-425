/*
============================================
; Title:  app.po.ts (WK 5)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 09 August 2019
; Description: MD In Action TS file.
;===========================================
*/

import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
}
