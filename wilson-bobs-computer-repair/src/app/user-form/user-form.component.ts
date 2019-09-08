/*
============================================
; Title:  user-form.component.ts (WK 9)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 2 September 2019
; Description: Bob's Computer Repair Shop App
; Credits: All images provided by Pexels.com
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { User } from '../model/user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  reactiveForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl()
  });

  userData = new User('', '');

  userServiceData: object;

  constructor(
    private fb: FormBuilder,
    private user: UserService
    ) { }

  ngOnInit() {

    this.fb.group({
      firstname: [],
      lastname: []
    })
    this.user.currentUserData.subscribe(userServiceData => this.userServiceData = userServiceData)
  }

  onSubmit() {
    console.log(this.reactiveForm);
  }
}
