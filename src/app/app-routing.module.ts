import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AdminComponent } from "./home/admin/admin.component";
import { CartDetailComponent } from "./home/cart/cartDetail.component";
import { CheckoutComponent } from "./home/checkout/checkout.component";
import { MenuComponent } from "./home/menu/menu.component";
import { ProductEditorComponent } from "./home/admin/productEdit.component";
import { ProductTableComponent } from "./home/admin/productTable.component";
import { OrderTableComponent } from "./home/admin/orderTable.component";

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'cart',
    component: CartDetailComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'products/:mode/:id', component: ProductEditorComponent },
      { path: 'products/:mode', component: ProductEditorComponent },
      { path: 'products', component: ProductTableComponent },
      { path: "orders", component: OrderTableComponent },
      { path: '**', redirectTo: 'products' },
    ],
  },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
