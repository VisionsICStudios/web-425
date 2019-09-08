/*
============================================
; Title:  user.service.ts (WK 9)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 2 September 2019
; Description: Bob's Computer Repair Shop App
; Credits: All images provided by Pexels.com
;===========================================
*/

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userModelData = new User('', '');

  private userDataStoreSource = new BehaviorSubject<object>(this.userModelData);

  currentUserData = this.userDataStoreSource.asObservable();

  constructor() {
  }

  updateUserData(userServiceData: object) {
    this.userDataStoreSource.next(this.userModelData)
  }
}
