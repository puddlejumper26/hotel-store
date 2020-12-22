import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { Order } from '../model/order.model';
import { RestDataSource } from './rest.service';

@Injectable()
export class OrderRepository {
  private orders: Order[] = [];
  private loaded: boolean = false; // without this, JSON server would run without stop

  constructor(private dataSource: RestDataSource) {}

  loadOrders() {
    this.loaded = true;
    this.dataSource.getOrders().subscribe((orders) => (this.orders = orders));
  }

  getOrders(): Order[] {
    if (!this.loaded) {
      this.loadOrders();
    }
    return this.orders;
  }

  saveOrder(order: Order): Observable<Order> {
    return this.dataSource.saveOrder(order);
  }
}
