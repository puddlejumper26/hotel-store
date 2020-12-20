import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { CartSummaryComponent } from './cart/cartSummary.component';
import { HomeComponent } from './home.component';
import { MenuComponent } from './menu/menu.component';
import { ProductEditorComponent } from './admin/productEdit.component';
import { ProductTableComponent } from './admin/productTable.component';
import { CartDetailComponent } from './cart/cartDetail.component';


@NgModule({
  declarations: [AdminComponent, CartDetailComponent, CartSummaryComponent, HomeComponent, MenuComponent, ProductEditorComponent, ProductTableComponent],
  imports: [BrowserModule, CommonModule, FormsModule, RouterModule],
  exports: [HomeComponent, MenuComponent, AdminComponent, ProductTableComponent, ProductEditorComponent],
})
export class HomeModule { }
