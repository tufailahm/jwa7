import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
  { path: "", redirectTo: "home" ,pathMatch :"full"},
  { path: "welcome", component: WelcomeComponent },
  { path: "aboutus", component: AboutusComponent },
  { path: "home", component: HomeComponent },
  { path: "cart", component: CartComponent },
  { path: "productList", component: ProductListComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
