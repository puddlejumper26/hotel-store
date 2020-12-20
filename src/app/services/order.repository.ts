import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";

import { Order } from "../model/order.model";
import { RestDataSource } from "./rest.service";

@Injectable()
export class OrderRepository {
  constructor(private dataSource: RestDataSource) {}

  saveOrder(order: Order): Observable<Order> {
    return this.dataSource.saveOrder(order);
  }
}
