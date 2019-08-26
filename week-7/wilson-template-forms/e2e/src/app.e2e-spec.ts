/*
============================================
; Title:  app.e2e-spec.ts (WK 7)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 20 August 2019
; Description: Template Forms TS file.
; Credits: All images provided by Pexels.com
;===========================================
*/

import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to wilson-template-forms!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
