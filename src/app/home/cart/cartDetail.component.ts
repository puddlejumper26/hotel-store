import { Component } from '@angular/core';
import { Cart } from 'src/app/services/cart.model';

@Component({
  templateUrl: 'cartDetail.component.html',
})
export class CartDetailComponent {
  constructor(public cart: Cart) {}
}
