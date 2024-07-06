import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import {ProductsComponent} from "./products.component";
import {ProductCardComponent} from "./product-card/product-card.component";
import {SpinnerComponent} from "../shared/spinner/spinner/spinner.component";
import {TrimPipe} from "../shared/trim.pipe";
import {PricePipe} from "../shared/price.pipe";
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
