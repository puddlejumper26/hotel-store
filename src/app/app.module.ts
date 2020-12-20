import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Cart } from './services/cart.model';
import { HomeModule } from './home/home.module';
import { OrderRepository } from './services/order.repository';
import { ProductRepository } from './services/product.repository';
import { RestDataSource } from './services/rest.service';
import { Order } from './model/order.model';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HomeModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [Cart, Order, OrderRepository, ProductRepository, RestDataSource],
  bootstrap: [AppComponent],
})
export class AppModule {}
