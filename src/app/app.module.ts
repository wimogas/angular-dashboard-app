import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app.routes";

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
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
