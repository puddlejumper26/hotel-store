import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { Cart } from 'src/app/services/cart.model';
import { ProductRepository } from 'src/app/services/product.repository';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public selectedCategory = null;

  constructor(
    private cart: Cart,
    private repository: ProductRepository,
    private route: Router
  ) {}

  ngOnInit(): void {}

  get products(): Product[] {
    return this.repository.getProducts(this.selectedCategory);
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string): void {
    this.selectedCategory = newCategory;
  }

  addProductToCart(product: Product) {
    this.cart.addLine(product);
    this.route.navigateByUrl('/cart');
  }
}
