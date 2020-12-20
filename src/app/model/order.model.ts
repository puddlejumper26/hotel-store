import { Injectable } from "@angular/core";

import { Cart } from "../services/cart.model";

@Injectable()
export class Order {
  public lastName: string;
  public title: string;
  public number: number;

  constructor(public cart: Cart) {}

  clear() {
    this.lastName = null;
    this.number = null;
    this.cart.clear();
  }
}
