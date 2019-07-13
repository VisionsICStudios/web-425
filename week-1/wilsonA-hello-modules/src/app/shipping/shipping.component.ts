import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping',
  template: `
    <p>
      This is where the 'ship' goes down... Let's hope not! Shipping stuff happens here.
    </p>
  `,
  styles: []
})
export class ShippingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
