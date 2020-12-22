import { Component } from "@angular/core";
import { Order } from "src/app/model/order.model";

import { OrderRepository } from './../../services/order.repository';

@Component({
  templateUrl: "orderTable.component.html"
})
export class OrderTableComponent {

  constructor(private repository: OrderRepository) {}

  getOrders(): Order[] {
    return this.repository.getOrders();
  }
}
