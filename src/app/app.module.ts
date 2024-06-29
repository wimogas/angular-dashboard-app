import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app.routes";
import {UserModule} from "./user/user.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {ProductsModule} from "./products/products.module";
import {CategoriesModule} from "./categories/categories.module";
import {AuthModule} from "./auth/auth.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  providers: [
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    AuthModule,
    UserModule,
    DashboardModule,
    ProductsModule,
    CategoriesModule
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
