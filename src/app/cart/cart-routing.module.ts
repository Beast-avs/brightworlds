import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';

const cartRoutes: Routes = [
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(cartRoutes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
