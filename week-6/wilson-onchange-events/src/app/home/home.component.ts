/*
============================================
; Title:  home.component.ts (WK 6)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 12 August 2019
; Description: OnChange Events TS file.
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

  myGreeting = 'Hello There';
  myUser: { name: string } = { name: 'John Doe'}

  constructor() { }

  ngOnInit() {
  }
}
