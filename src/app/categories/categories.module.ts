import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import {CategoriesComponent} from "./categories.component";
import {PricePipe} from "../_shared/price.pipe";
import {SpinnerComponent} from "../_shared/spinner/spinner.component";
import {TrimPipe} from "../_shared/trim.pipe";


@NgModule({
  declarations: [CategoriesComponent],
    imports: [
        CommonModule,
        CategoriesRoutingModule,
        PricePipe,
        SpinnerComponent,
        TrimPipe
    ]
})
export class CategoriesModule { }
