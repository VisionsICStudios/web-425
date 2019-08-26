/*
============================================
; Title:  home.component.ts (WK 7)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 20 August 2019
; Description: Template Forms TS file.
; Credits: All images provided by Pexels.com
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  onSubmit(formData) {
    console.log(formData);
    alert('Username: ' + formData.username + '\nSSN: ' + formData.ssn + '\nPassword: ' + formData.passwordsGroup.password + '\nConfirm Password: ' + formData.passwordsGroup.pconfirm)
  }

  constructor() { }

  ngOnInit() {
  }

}
