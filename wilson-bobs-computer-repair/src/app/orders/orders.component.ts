/*
============================================
; Title:  orders.component.ts (WK 9)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 2 September 2019
; Description: Bob's Computer Repair Shop App
; Credits: All images provided by Pexels.com
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  disk = { service: 'Hard Disk Cleanup', price: 149.99 };
  keyboard = { service: 'Keyboard Cleanup', price: 45.00 };
  password = { service: 'Password Reset', price: 39.99 };
  ram = { service: 'RAM Upgrade', price: 129.99 };
  software = { service: 'Software Install (OS)', price: 49.99 };
  spyware = { service: 'Spyware Removal', price: 99.99 };
  tune = { service: 'Tune Up', price: 89.99 };
  title = 'Bobs Computer Repair Shop';

  onSubmit(formData) {

    let invoiceData: object[] = [];

    alert('See the browser Console...');

    if (formData.checkGroup.disk) {
      console.log(this.disk.service + ' Cost: ' + this.disk.price);
      invoiceData.push(this.disk);
    }

    if (formData.checkGroup.keyboard) {
      console.log(this.keyboard.service + ' Cost: ' + this.keyboard.price);
      invoiceData.push(this.keyboard);
    }

    if (formData.checkGroup.password) {
      console.log(this.password.service + ' Cost: ' + this.password.price);
      invoiceData.push(this.password);
    }

    if (formData.checkGroup.ram) {
      console.log(this.ram.service + ' Cost: ' + this.ram.price);
      invoiceData.push(this.ram);

    }

    if (formData.checkGroup.software) {
      console.log(this.software.service + ' Cost: ' + this.software.price);
      invoiceData.push(this.software);
    }

    if (formData.checkGroup.spyware) {
      console.log(this.spyware.service + ' Cost: ' + this.spyware.price);
      invoiceData.push(this.spyware);
    }

    if (formData.checkGroup.tune) {
      console.log(this.tune.service + ' Cost: ' + this.tune.price);
      invoiceData.push(this.tune);

    }

    console.log('Parts costs: ' + formData.parts);
    console.log('Labor costs: ' + formData.labor);

    console.log(invoiceData);
  }
}
