import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RestDataSource } from './services/rest.service';
import { ProductRepository } from './services/product.repository';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { Cart } from './services/cart.model';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HomeModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [Cart, ProductRepository, RestDataSource],
  bootstrap: [AppComponent]
})
export class AppModule { }
