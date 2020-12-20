import { Component } from '@angular/core';
import { Cart } from 'src/app/services/cart.model';

@Component({
  selector: 'app-cart-summary',
  templateUrl: 'cartSummary.component.html',
})
export class CartSummaryComponent {
  constructor(public cart: Cart) {}
}
