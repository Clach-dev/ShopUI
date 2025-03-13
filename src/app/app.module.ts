import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common-ui/header/header.component';
import {FormsModule} from "@angular/forms";
import { BuyButtonComponent } from './common-ui/buy-button/buy-button.component';
import { ScrollProductComponent } from './common-ui/scroll-product/scroll-product.component';
import { ProductCardComponent } from './common-ui/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BuyButtonComponent,
    ScrollProductComponent,
    ProductCardComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
