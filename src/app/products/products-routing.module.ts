import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products.component";
import {AuthGuard} from "../auth/guards/auth-guard.guard";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ProductListComponent} from "./product-list/product-list.component";

const routes: Routes = [{
  path: 'products',
  component: ProductsComponent,
  canActivate: [AuthGuard],
  children: [
    {
      path: '', component: ProductListComponent
    },
    {
      path: ':id', component: ProductDetailComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
