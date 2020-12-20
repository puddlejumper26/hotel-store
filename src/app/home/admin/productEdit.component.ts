import { ActivatedRoute, Router } from '@angular/router';
import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';

import { Product } from "src/app/model/product.model";
import { ProductRepository } from "src/app/services/product.repository";

@Component({
  templateUrl: './productEdit.component.html',
})
export class ProductEditorComponent {
  product: Product = new Product();
  editing: boolean = false;

  constructor(
    private repository: ProductRepository,
    private router: Router,
    activeRoute: ActivatedRoute
  ) {
    this.editing = activeRoute.snapshot.params['mode'] == 'edit';
    if (this.editing) {
      Object.assign(
        this.product,
        repository.getProduct(activeRoute.snapshot.params['id'])
      );
    }
  }

  save(form: NgForm) {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl('/admin/main/products');
  }
}
