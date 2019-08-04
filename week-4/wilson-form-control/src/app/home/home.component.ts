import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p>
    Oh My! You landed on the From-App Home Page!
    </p>
  `,
  styles: [`
    p {
      background-color: steelblue;
      color: white;
      padding: 20px;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
