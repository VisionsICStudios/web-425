/*
============================================
; Title:  invoice.service.ts (WK 9)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 2 September 2019
; Description: Bob's Computer Repair Shop App
; Credits: All images provided by Pexels.com
;===========================================
*/

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Invoice } from '../model/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private userModelData = new Invoice('', 0);

  private userDataStoreSource = new BehaviorSubject<object>(this.userModelData);

  currentUserData = this.userDataStoreSource.asObservable();

  constructor() {
  }

  updateUserData(userServiceData: object) {
    this.userDataStoreSource.next(this.userModelData)
  }
}
