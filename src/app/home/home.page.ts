import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items = [
    { id: 1, port: 'Salina Cruz', country: { country: 'Mexico' } },
    { id: 2, port: 'Valencia', country: { country: 'Spain' } },
    { id: 3, port: 'Veracruz', country: { country: 'Mexico' } }
  ];

  constructor() {}

}
