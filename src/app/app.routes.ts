import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from "./user/user.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProductsComponent} from "./products/products.component";
import {AuthComponent} from "./auth/auth.component";
import {CategoriesComponent} from "./categories/categories.component";

const routes: Routes = [
  {
    path:'', redirectTo: '/dashboard', pathMatch: 'full'
  },
  {
    path: 'auth', component: AuthComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'categories', component: CategoriesComponent
  },
  {
    path: 'user', component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
