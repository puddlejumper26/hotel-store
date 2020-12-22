import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Order } from '../model/order.model';
import { Product } from '../model/product.model';

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable()
export class RestDataSource {
  baseUrl: string;
  auth_token: string = '';

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  /**
   * Product Related
   */
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'products');
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(
      this.baseUrl + 'products',
      product,
      this.getOptions()
    );
  }

  updateProduct(product): Observable<Product> {
    return this.http.put<Product>(
      `${this.baseUrl}products/${product.id}`,
      product,
      this.getOptions()
    );
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(
      `${this.baseUrl}products/${id}`,
      this.getOptions()
    );
  }

  /**
   * Order Related
   */
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl + 'orders',this.getOptions());
  }

  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseUrl + 'orders', order);
  }

  private getOptions() {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer<${''}>`,
      }),
    };
  }
}
