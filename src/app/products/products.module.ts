import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import {ProductsComponent} from "./products.component";
import {ProductCardComponent} from "./product-card/product-card.component";
import {SpinnerComponent} from "../_shared/spinner/spinner.component";
import {TrimPipe} from "../_shared/trim.pipe";
import {PricePipe} from "../_shared/price.pipe";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ProductListComponent} from "./product-list/product-list.component";

@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
    ProductDetailComponent,
    ProductListComponent
  ],
  imports: [
      CommonModule,
      ProductsRoutingModule,
      SpinnerComponent,
      TrimPipe,
      PricePipe
  ]
})
export class ProductsModule { }
