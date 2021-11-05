import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { MobileNumberPipe } from './pipes/mobile-number.pipe';
import { HoverChangeColorDirective } from './directives/hover-change-color.directive'
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutusComponent,
    ProductListComponent,
    HomeComponent,
    CartComponent,
    MobileNumberPipe,
    HoverChangeColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
