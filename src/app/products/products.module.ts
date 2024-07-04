import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import {ProductsComponent} from "./products.component";
import {ProductCardComponent} from "./product-card/product-card.component";


@NgModule({
  declarations: [ProductsComponent],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        ProductCardComponent
    ]
})
export class ProductsModule { }
